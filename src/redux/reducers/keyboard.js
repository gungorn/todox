import { KEYBOARD_CLOSE, KEYBOARD_OPEN, SET_KEYBOARD_ACTIVE, SET_KEYBOARD_HEIGHT } from '../types';

const initialState = {
    active: false,
    height: 0
};

export const keyboard = (state = initialState, { type, payload }) => {
    switch (type) {
        case KEYBOARD_OPEN:
            console.log('keyboard opened');
            return { ...state, active: true, height: payload };

        case KEYBOARD_CLOSE:
            console.log('keyboard closed');
            return { ...state, active: false, height: 0 };

        case SET_KEYBOARD_ACTIVE:
            return { ...state, active: payload };

        case SET_KEYBOARD_HEIGHT:
            return { ...state, height: payload };

        default:
            return { ...state };
    }
};