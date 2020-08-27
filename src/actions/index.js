import axios from 'axios';
import { createAction } from 'redux-actions';
import { urlRegister } from '../url';
export const fetchTaskRequest = createAction('TASKS_FETCH_REQUEST');
export const fetchTaskSuccess = createAction('TASKS_FETCH_SUCCESS');
export const fetchTaskFailure = createAction('TASK_FETCH_FAILURE');

export const fetchRegisterRequest = createAction('REGISTER_FETCH_REQUEST');
export const fetchRegisterSuccess = createAction('REGISTER_FETCH_SUCCESS');
export const fetchRegisterFailure = createAction('REGISTER_FETCH_FAILURE');
// interface Credentials {
//     email: string;
//     name: string;
//     password: string;
//     age: string;
// }
export const fetchRegister = (credentials) => async(
    dispatch
) => {
    dispatch(fetchRegisterRequest());
    try {
        var data = JSON.stringify({ "name": "Muhammad Nur Ali", "email": "muh.nurali43@gmail.com", "password": "12345678", "age": 20 });
        var config = {
            method: 'post',
            url: 'https://api-nodejs-todolist.herokuapp.com/user/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        // const url = urlRegister();
        // const data = JSON.stringify({...credentials, age: 22 });
        // console.log(data);
        // const headers = { 'Content-type': 'application/json' };
        // const config = {
        //   method: 'post',
        //   url: 'https://api-nodejs-todolist.herokuapp.com/user/register',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   data: data
        // };
        // console.log(headers);
        // await axios.post(url, data, { headers: headers });
        await axios(config)
        console.log('success');
        dispatch(fetchRegisterSuccess());
    } catch {
        console.log('error');
        dispatch(fetchRegisterFailure());
    }
};