import axios from 'axios';
import { createAction } from 'redux-actions';
import { urlRegister, urlLogIn } from '../url';

export const fetchTaskRequest = createAction('TASKS_FETCH_REQUEST');
export const fetchTaskSuccess = createAction('TASKS_FETCH_SUCCESS');
export const fetchTaskFailure = createAction('TASK_FETCH_FAILURE');

export const fetchRegisterRequest = createAction('REGISTER_FETCH_REQUEST');
export const fetchRegisterSuccess = createAction('REGISTER_FETCH_SUCCESS');
export const fetchRegisterFailure = createAction('REGISTER_FETCH_FAILURE');

export const fetchAutorizationRequest = createAction('AUTHORIZATION_FETCH_REQUEST');
export const fetchAutorizationSuccess = createAction('AUTHORIZATION_FETCH_SUCCESS');
export const fetchAuthorizationFailure = createAction('AUTHORIZATION_FETCH_FAILURE');

export const fetchLoggedRequest = createAction('IS_AUTH_FETCH_REQUEST');
export const fetchLoggedSuccess = createAction('IS_AUTH_FETCH_SUCCESS');
export const fetchLoggedFailure = createAction('IS_AUTH_FETCH_FAILURE');

export const fetchRegister = (credentials) => async(dispatch) => {
    dispatch(fetchRegisterRequest());
    try {
        const config = {
            method: 'post',
            url: urlRegister(),
            headers: {
                'Content-Type': 'application/json'
            },
            data: {...credentials }
        };
        const response = await axios(config);
        const token = response.data.token;
        dispatch(fetchRegisterSuccess({ credentials, token }));
    } catch (e) {
        dispatch(fetchRegisterFailure());
    }
};

export const fetchAuth = (credentials) => async(dispatch) => {
    dispatch(fetchAutorizationRequest());
    const { email, password } = credentials;
    try {
        const config = {
            method: 'post',
            url: urlLogIn(),
            headers: {
                'Content-Type': 'application/json'
            },
            data: { email, password }
        }
        const response = await axios(config);
        sessionStorage.setItem('token', response.data.token)
        dispatch(fetchAutorizationSuccess({ email, token: response.token }))
    } catch (e) {
        dispatch(fetchAuthorizationFailure(e))
    }
}

export const fetchLogged = (token) => async(dispatch) => {
    dispatch(fetchLoggedRequest());
    try {
        const config = {
            mehtod: "get",
            url: "https://api-nodejs-todolist.herokuapp.com/user/me",
            headers: {
                Authorization: token,
            },
        };
        const response = await axios(config);
        dispatch(fetchLoggedSuccess());
    } catch (e) {
        dispatch(fetchLoggedFailure(e))
    }
}