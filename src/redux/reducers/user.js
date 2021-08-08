import store from '~redux';
import { GETUSERNOTEs } from '~/request/firebase';
import {
    GET_USER_NOTES,
    SEND,
    SET_IS_SIGN,
    SET_LOGIN_LOADING,
    SET_NOTE,
    SET_SIGNIN_LOADING,
    USER_SIGNIN, USER_SIGNUP
} from '../types';

import * as actions from '../actions';
import moment from 'moment';


const initialState = {
    uid: '',
    x: false,
    loginLoading: false,
    signInLoading: false,
    isSignIn: false,
    note: '',
    userNotes: null
};

export const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOGIN_LOADING:
            return { ...state, loginLoading: payload };

        case SET_SIGNIN_LOADING:
            return { ...state, signInLoading: payload };

        case SET_IS_SIGN:
            return { ...state, isSignIn: payload };

        case SET_NOTE:
            return { ...state, note: payload };


        case SEND:
            return { ...state, note: '' };

        case GET_USER_NOTES:
            const keys = Object.keys(payload || {});
            let data = [];
            keys.forEach(d => data.push({ ...payload[d], noteid: d }));

            return { ...state, userNotes: data, };

        case USER_SIGNIN:
        case USER_SIGNUP:
            GETUSERNOTEs({
                uid: payload.uid,
                dispatch: d => store.dispatch(actions.GET_USER_NOTES(d))
            });

            return {
                ...state,
                ...payload,
                loginLoading: false,
                signInLoading: false,
                isSignIn: false
            };

        default:
            return { ...state };
    }
}