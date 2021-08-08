import { light } from '~theme';
import { SET_THEME, USER_SIGNIN } from '../types';


const initialState = {
    defaultTheme: light,
    theme: null
};

export const theme = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_THEME:
            return { ...state, theme: payload };

        default:
            return { ...state };
    }
};