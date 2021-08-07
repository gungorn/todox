import * as types from '../types';

export const KEYBOARD_OPEN = (data) => {
    return {
        type: types.KEYBOARD_OPEN,
        payload: null
    };
};

export const KEYBOARD_CLOSE = () => {
    return { type: types.KEYBOARD_CLOSE };
};