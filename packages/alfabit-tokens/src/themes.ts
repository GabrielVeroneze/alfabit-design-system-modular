import { background, blue, gray, green, neutral, red, yellow } from './colors'

export const lightTheme = {
    colors: {
        ...neutral,
        background: background.light,
        text: gray.primary,
        primary: blue.primary,
        secondary: gray.secondary,
        success: green.primary,
        error: red.primary,
        warning: yellow.primary,
    },
}

export const darkTheme = {}
