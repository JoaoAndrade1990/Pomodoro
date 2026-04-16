import { HomeIcon, History, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./Menu.module.css"

export function Menu() {
    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href="">
                <HomeIcon></HomeIcon>
            </a>
            <a className={styles.menuLink} href="">
                <History></History>
            </a>
            <a className={styles.menuLink} href="">
                <SettingsIcon></SettingsIcon>
            </a>
            <a className={styles.menuLink} href="">
                <SunIcon></SunIcon>
            </a>
        </nav>
    )
}