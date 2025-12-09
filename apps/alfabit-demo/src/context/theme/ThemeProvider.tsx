'use client'

import { useState } from 'react'
import { defaultTheme, Theme } from '@gabriel_veroneze/alfabit-tokens'
import { ThemeContext } from './ThemeContext'

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [appTheme, setAppTheme] = useState<Theme | undefined>(defaultTheme)

    const changeTheme = (theme: Theme) => {
        setAppTheme(theme)
    }

    return (
        <ThemeContext.Provider
            value={{ theme: appTheme, changeTheme: changeTheme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
