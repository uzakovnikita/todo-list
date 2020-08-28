import axios from 'axios';
import { createAction } from 'redux-actions';
import { urlRegister } from '../url';
export const fetchTaskRequest = createAction('TASKS_FETCH_REQUEST');
export const fetchTaskSuccess = createAction('TASKS_FETCH_SUCCESS');
export const fetchTaskFailure = createAction('TASK_FETCH_FAILURE');

export const fetchRegisterRequest = createAction('REGISTER_FETCH_REQUEST');
export const fetchRegisterSuccess = createAction('REGISTER_FETCH_SUCCESS');
export const fetchRegisterFailure = createAction('REGISTER_FETCH_FAILURE');

export const fetchRegister = (credentials) => async (dispatch) => {
  dispatch(fetchRegisterRequest());
  try {
    console.log(credentials);
    var config = {
      method: 'post',
      url: urlRegister(),
      headers: {
        'Content-Type': 'application/json'
      },
      data: { ...credentials }
    };
    const response = await axios(config);
    const token = response.data.token;
    console.log(token);
    dispatch(fetchRegisterSuccess(credentials, token));
  } catch (e) {
    dispatch(fetchRegisterFailure());
  }
};
