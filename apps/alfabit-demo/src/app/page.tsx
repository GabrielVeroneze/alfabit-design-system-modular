'use client'

import { Button } from '@gabriel_veroneze/alfabit-button'
import styles from './page.module.css'

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.intro}>
                    <h1>Bem-vindo ao Design System Alfabit</h1>
                    <Button>Hello World, Alfabit npm!</Button>
                </div>
            </main>
        </div>
    )
}
