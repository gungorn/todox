import { allColors } from './colors';

export const light = {
    lightGray: allColors.lightGray,
    blue: allColors.blue,
    silver: allColors.silve,
    gray: allColors.gray,
    white: allColors.white,
    black: allColors.black
}

export const night = {
    lightGray: allColors.lightGray,
    blue: allColors.blue,
    silver: allColors.silve,
    gray: allColors.gray,
    white: allColors.white,
    black: allColors.black
}

export const getPalette = name => {
    switch (name) {
        case 'light': return light;
        case 'night': return night;
        default: return light;
    }
}