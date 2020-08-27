import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import * as actions from "../actions/index";
import { handleActions } from "redux-actions";
const auth = handleActions({
    [actions.fetchRegisterSuccess](state, { payload: { credentials } }) {
        return {
            ...credentials,
        };
    },
}, {});

export default combineReducers({
    // taskRemovingState,
    // taskFetchingState,
    // tasks,
    auth,
    form: formReducer,
});