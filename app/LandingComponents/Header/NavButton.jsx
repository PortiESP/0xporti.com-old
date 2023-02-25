import styles from "./NavButton.module.scss"

export default function NavButton({children, borderColor}){

    return <button className={styles.button__main} style={{borderColor}}>{children}</button>

}