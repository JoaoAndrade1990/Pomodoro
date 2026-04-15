import { HomeIcon } from "lucide-react";
import styles from "./Menu.module.css"

export function Menu() {
    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href="">
                <HomeIcon></HomeIcon>
            </a>
            <a className={styles.menuLink} href="">
                <HomeIcon></HomeIcon>
            </a>
            <a className={styles.menuLink} href="">
                <HomeIcon></HomeIcon>
            </a>
            <a className={styles.menuLink} href="">
                <HomeIcon></HomeIcon>
            </a>
        </nav>
    )
}