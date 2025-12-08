'use client'

import { Button } from '@gabriel_veroneze/alfabit-button'
import { darkTheme, lightTheme } from '@gabriel_veroneze/alfabit-tokens'
import { useTheme } from '@/context/theme/useTheme'
import styles from './page.module.css'

export default function Home() {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.intro}>
                    <h1>Bem-vindo ao Design System Alfabit</h1>
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
                        Trocar o tema
                    </Button>
                </div>
            </main>
        </div>
    )
}
