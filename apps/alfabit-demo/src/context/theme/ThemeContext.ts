'use client'

import { createContext } from 'react'
import { Theme } from '@gabriel_veroneze/alfabit-tokens'

interface ThemeContextType {
    theme: Theme | undefined
    changeTheme: (theme: Theme) => void
}

const defaultValue: ThemeContextType = {
    theme: undefined,
    changeTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextType>(defaultValue)
ThemeContext.displayName = 'Theme'
