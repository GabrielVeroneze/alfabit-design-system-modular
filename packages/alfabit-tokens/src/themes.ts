import { background, blue, gray, green, red, yellow } from './colors'

export interface Theme {
    colors: {
        background: string
        text: string
        primary: string
        secondary: string
        black: string
        white: string
        success: string
        error: string
        warning: string
        disabled: string
    }
}

const commonColors = {
    black: gray.black,
    white: gray.white,
    success: green.primary,
    error: red.primary,
    warning: yellow.primary,
    disabled: gray.disabled,
}

export const lightTheme: Theme = {
    colors: {
        ...commonColors,
        background: background.light,
        text: gray.primary,
        primary: blue.primary,
        secondary: gray.secondary,
    },
}

export const darkTheme: Theme = {
    colors: {
        ...commonColors,
        background: gray.primary,
        text: gray.white,
        primary: blue.tertiary,
        secondary: gray.tertiary,
    },
}

export const defaultTheme: Theme = lightTheme
