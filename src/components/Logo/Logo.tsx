import styles from "./Logo.module.css"
import { TimerIcon } from "lucide-react"

export function Logo() {
    return (
        <div className={styles.logo}>
            <span><TimerIcon/></span>
            <a className={styles.logoLink} href="#">Chronos</a>
        </div>
    )
}