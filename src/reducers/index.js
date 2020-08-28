import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions/index';
import { handleActions } from 'redux-actions';
const auth = handleActions(
  {
    [actions.fetchRegisterSuccess](state, { payload: { credentials, token } }) {
      return {
        credentials: { ...credentials },
        token,
        isAuth: true
      };
    }
  },
  { credentials: {}, token: {}, isAuth: false }
);

export default combineReducers({
  auth,
  form: formReducer
});
