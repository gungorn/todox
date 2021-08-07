import { SET_IS_SIGN, SET_LOGIN_LOADING, SET_SIGNIN_LOADING, USER_LOGIN, USER_SIGNIN } from '../types';


const initialState = {
    uid: '',
    x: false,
    loginLoading: false,
    signInLoading: false,
    isSignIn: false,
};

export const user = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOGIN_LOADING:
            return { ...state, loginLoading: payload };

        case SET_SIGNIN_LOADING:
            return { ...state, signInLoading: payload };

        case SET_IS_SIGN:
            return { ...state, isSignIn: payload };

        case USER_LOGIN:
            return {
                ...state,
                ...payload,
                loginLoading: false,
                signInLoading: false,
                isSignIn: false
            };

        case USER_SIGNIN:
            return {
                ...state,
                uid: payload.uid,
                isSignIn: false,
                signInLoading: false
            };

        default:
            return { ...state };
    }
}