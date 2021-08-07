import store from '~redux';
import { allColors, getPalette } from '~theme';

export const COLOR = (c) => {
    const themeStore = store.getState().theme;

    return themeStore.theme ? themeStore.theme[c] : themeStore.defaultTheme[c];
}