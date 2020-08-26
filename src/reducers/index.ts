import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import * as actions from "../actions/index";
export default combineReducers({
  taskRemovingState,
  taskFetchingState,
  tasks,
  form: formReducer,
});
