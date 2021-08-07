import * as types from '../types';


export const SET_THEME = theme => {
    return {
        type: types.SET_THEME,
        payload: theme
    };
};