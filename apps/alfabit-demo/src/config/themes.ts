import {
    defaultTheme,
    gray,
    Theme,
    violet,
} from '@gabriel_veroneze/alfabit-tokens'

export const customTheme: Theme = {
    colors: {
        ...defaultTheme.colors,
        background: violet.quaternary,
        text: gray.black,
        primary: violet.primary,
        secondary: violet.secondary,
    },
}
