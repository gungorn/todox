import * as firebase from '~request/firebase';

import * as types from '../types';

export const SET_LOGIN_LOADING = payload => ({ type: types.SET_LOGIN_LOADING, payload });
export const SET_SIGNIN_LOADING = payload => ({ type: types.SET_SIGNIN_LOADING, payload });

export const SET_IS_SIGN = payload => ({ type: types.SET_IS_SIGN, payload });

export const SET_NOTE = payload => ({ type: types.SET_NOTE, payload });

export const GET_USER_NOTES = payload => ({ type: types.GET_USER_NOTES, payload });

export const USER_SIGNIN = args => async dispatch => {
    SET_LOGIN_LOADING(true);

    dispatch({
        type: types.USER_SIGNIN,
        payload: await firebase.SIGNINWITHEMAIL(args)
    });
};

export const USER_SIGNUP = args => async dispatch => {
    SET_SIGNIN_LOADING(true);

    dispatch({
        type: types.USER_SIGNUP,
        payload: await firebase.SIGNUPWITHEMAIL(args)
    });
};

export const SEND = args => async dispatch => {
    dispatch({
        type: types.SEND,
        payload: await firebase.SEND(args)
    });
};

export const NOTE_ARCHIVE = args => async dispatch => {
    const data = await firebase.NOTEARCHIVE(args);

    dispatch({
        type: types.NOTE_ARCHIVE,
        payload: null
    });
};