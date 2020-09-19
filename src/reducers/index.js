import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions/index';
import { handleActions } from 'redux-actions';
import _ from 'lodash';

const registrationState = handleActions({
    [actions.fetchRegisterSuccess]() {
        return 'finished'
    },
    [actions.fetchRegisterRequest]() {
        return 'request'
    },
    [actions.fetchRegisterFailure]() {
        return 'failed'
    },

}, 'none');

const autorizationState = handleActions({
    [actions.fetchAutorizationRequest]() {
        return 'request';
    },
    [actions.fetchAutorizationSuccess]() {
        return 'finished';
    },
    [actions.fetchAuthorizationFailure]() {
        return 'failed';
    },
}, 'none');

const loggedState = handleActions({
    [actions.fetchLoggedRequest]() {
        return 'request';
    },
    [actions.fetchLoggedSuccess]() {
        return 'finished';
    },
    [actions.fetchLoggedFailure]() {
        return 'failed';
    },
}, 'none');

const tasksRemovingState = handleActions({
    [actions.removeTaskRequest]() {
        return 'request';
    },
    [actions.removeTaskSuccess]() {
        return 'finished';
    },
    [actions.removeTaskFailure]() {
        return 'failed';
    },
}, 'none');

const tasksAddState = handleActions({
    [actions.addTaskRequest]() {
        return 'request';
    },
    [actions.addTaskSuccess]() {
        return 'finished';
    },
    [actions.addTaskFailure]() {
        return 'failed';
    },
}, 'none');

const tasksFetchState = handleActions({
    [actions.fetchTaskRequest]() {
        return 'request';
    },
    [actions.fetchTaskSuccess]() {
        return 'finished';
    },
    [actions.fetchTaskFailure]() {
        return 'failed';
    }
}, 'none');

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
}, { email: '', token: '' });

const logged = handleActions({
    [actions.fetchLoggedSuccess](state) {
        return true;
    },
    [actions.fetchLoggedFailure](state) {
        return false;
    }
}, false);

const tasks = handleActions({
    [actions.fetchTaskSuccess](state, { payload: { data } }) {
        return {
            byId: _.keyBy(data, 'id'),
            allIds: data.map(t => t.id)
        }
    },
    // [actions.removeTaskSuccess](state, { payload: { id } }) {
    //     const { byId, allIds } = state;
    //     return {
    //         byId: _.omit(byId, id),
    //         allIds: _.without(allIds, id),
    //     };
    // },
    // [actions.addTaskSuccess](state, { payload: { id, task } }) {
    //     return {
    //         byId: {...state.byId, [task.id]: task },
    //         allIds: [...state.allIds, task.id],
    //     }
    // }
}, { byId: {}, allIds: [] });

export default combineReducers({
    registration,
    authorization,
    logged,
    tasks,
    registrationState,
    autorizationState,
    loggedState,
    tasksRemovingState,
    tasksAddState,
    tasksFetchState,
    form: formReducer
});