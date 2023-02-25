import Link from "next/link"
import styles from "./NavButton.module.scss"

export default function NavButton({children, borderColor, href}){

    return <Link className={styles.button__main} style={{borderColor}} href={href}>{children}</Link>

}