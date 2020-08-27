import axios from 'axios';
import { createAction } from 'redux-actions';

export const fetchTaskRequest = createAction('TASKS_FETCH_REQUEST');
export const fetchTaskSuccess = createAction('TASKS_FETCH_SUCCESS');
export const fetchTaskFailure = createAction('TASK_FETCH_FAILURE');

export const fetchRegisterRequest = createAction('REGISTER_FETCH_REQUEST');
export const fetchRegisterSuccess = createAction('REGISTER_FETCH_SUCCESS');
export const fetchRegisterFailure = createAction('REGISTER_FETCH_FAILURE');

export const fetchRegister = (credentials) => async (dispatch) => {
  dispatch(fetchRegisterRequest());
  try {
    const config = {
      method: 'post',
      url: 'https://api-nodejs-todolist.herokuapp.com/user/register',
      headers: { 'Content-Type': 'application/json' },
      data: {
        name: credentials.name,
        password: credentials.password,
        age: credentials.age,
        email: credentials.email
      }
    };
    axios.post(config);
    dispatch(fetchRegisterSuccess());
  } catch {
    dispatch(fetchRegisterFailure());
  }
};

// export const fetchTask = () => async (dispatch) => {
//   dispatch(fetchTaskRequest());
//   try {

//   } catch {
//     dispatch;
//   }
// };
