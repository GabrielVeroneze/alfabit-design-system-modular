'use client'

import { useState } from 'react'
import { Button } from '@gabriel_veroneze/alfabit-button'
import { darkTheme, lightTheme, Theme } from '@gabriel_veroneze/alfabit-tokens'
import styles from './page.module.css'

export default function Home() {
    const [appTheme, setAppTheme] = useState<Theme | undefined>(undefined)

    const toggleTheme = () => {
        setAppTheme(
            appTheme === lightTheme || !appTheme ? darkTheme : lightTheme,
        )
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.intro}>
                    <h1>Bem-vindo ao Design System Alfabit</h1>
                    <Button theme={appTheme}>Hello World, Alfabit npm!</Button>
                    <Button variant="secondary" onClick={toggleTheme}>
                        Trocar o tema
                    </Button>
                </div>
            </main>
        </div>
    )
}
