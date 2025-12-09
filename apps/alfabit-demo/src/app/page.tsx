'use client'

import { Button } from '@gabriel_veroneze/alfabit-button'
import { darkTheme, lightTheme } from '@gabriel_veroneze/alfabit-tokens'
import { useTheme } from '@/context/theme/useTheme'
import { customTheme } from '@/config/themes'
import styles from './page.module.css'

export default function Home() {
    const { theme, changeTheme } = useTheme()
    const buttonText = `Trocar para o tema ${theme === lightTheme || !theme ? 'dark' : 'light'}`

    return (
        <div
            className={styles.page}
            style={{ backgroundColor: theme?.colors.background }}
        >
            <main className={styles.main}>
                <div className={styles.intro}>
                    <h1 style={{ color: theme?.colors.text }}>
                        Bem-vindo ao Design System Alfabit
                    </h1>
                    <Button theme={theme}>Hello World, Alfabit npm!</Button>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            changeTheme(
                                theme === lightTheme || !theme
                                    ? darkTheme
                                    : lightTheme,
                            )
                        }
                    >
                        {buttonText}
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => changeTheme(customTheme)}
                    >
                        Trocar para o tema customizado
                    </Button>
                </div>
            </main>
        </div>
    )
}
