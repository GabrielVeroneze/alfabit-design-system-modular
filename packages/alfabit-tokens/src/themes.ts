import { background, blue, gray, green, red, yellow } from './colors'

const commonColors = {
    black: gray.black,
    white: gray.white,
    success: green.primary,
    error: red.primary,
    warning: yellow.primary,
}

export const lightTheme = {
    colors: {
        ...commonColors,
        background: background.light,
        text: gray.primary,
        primary: blue.primary,
        secondary: gray.secondary,
    },
}

export const darkTheme = {
    colors: {
        ...commonColors,
        background: gray.primary,
        text: gray.white,
        primary: blue.tertiary,
        secondary: gray.tertiary,
    },
}
