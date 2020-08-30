import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions/index';
import { handleActions } from 'redux-actions';

const registrationState = handleActions({
    [actions.fetchRegisterSuccess]() {
        return 'finished'
    },
    [actions.fetchRegisterRequest]() {
        return 'request'
    },
    [actions.fetchRegisterFailure]() {
        return 'failed'
    }

}, 'none')
const autorizationState = handleActions({
    [actions.fetchAutorizationRequest]() {
        return 'request';
    },
    [actions.fetchAutorizationSuccess]() {
        return 'finished';
    },
    [actions.fetchAuthorizationFailure]() {
        return 'failed';
    }
}, 'none')

// const byEmail = {
//     email: {credentials, token}
// }
// const allEmail = [
//     email,
// ]
// const registation = {
//     byEmail,
//     allEmail
// }
const registration = handleActions({
    [actions.fetchRegisterSuccess](state, { payload: { credentials, token } }) {
        const { byEmail, allEmail } = state;
        const { email } = credentials;
        return {
            byEmail: {
                ...byEmail,
                [email]: {
                    ...credentials,
                    token
                }
            },
            allEmail: [...allEmail, credentials.email]

        }
    }
}, { byEmail: {}, allEmail: [] });

const authorization = handleActions({
    [actions.fetchAutorizationSuccess](state, { payload: { email, token } }) {
        return {
            email,
            token
        }
    },
}, { email: '', isAuth: false })

export default combineReducers({
    registration,
    authorization,
    registrationState,
    autorizationState,
    form: formReducer
});