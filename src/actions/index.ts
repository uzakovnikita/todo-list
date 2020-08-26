import axios from "axios";
import { createAction } from "redux-actions";

export const fetchTaskRequest = createAction("TASKS_FETCH_REQUEST");
export const fetchTaskSuccess = createAction("TASKS_FETCH_SUCCESS");
export const fetchTaskFailure = createAction("TASK_FETCH_FAILURE");

export const fetchTask = () => async (dispatch) => {
  dispatch(fetchTaskRequest());
};
