import * as firebase from '~request/firebase';

import * as types from '../types';

export const SET_LOGIN_LOADING = payload => ({ type: types.SET_LOGIN_LOADING, payload });
export const SET_SIGNIN_LOADING = payload => ({ type: types.SET_SIGNIN_LOADING, payload });

export const SET_IS_SIGN = payload => ({ type: types.SET_IS_SIGN, payload });

export const USER_LOGIN = args => async dispatch => {
    SET_LOGIN_LOADING(true);

    dispatch({
        type: types.USER_LOGIN,
        payload: await firebase.LOGINWITHEMAIL(args)
    });
};

export const USER_SIGNIN = args => async dispatch => {
    SET_SIGNIN_LOADING(true);

    dispatch({
        type: types.USER_SIGNIN,
        payload: await firebase.SIGNINWITHEMAIL(args)
    });
};

export const SEND = args => async dispatch => {
    dispatch({
        type: types.SEND,
        payload: await firebase.SEND(args)
    });
};