
import Image from "next/image"
import styles from "./Header.module.scss"
import NavButton from "./NavButton"

export default function Header(){

    return (<>
        <div className={styles.div__header}>

            <div className={styles.div__navbar}>
                <div className={styles.div__logo}>
                    <Image alt="Logo image" fill={true} src="/assets/Logo.svg"/>
                </div>
                <nav>
                    <NavButton borderColor="#ff2">Blog</NavButton>
                    <NavButton borderColor="#0af">About</NavButton>
                </nav>
            </div>
            <div className={styles.div__quote}>
                <p>💻 Learn something new 🔬!</p>
            </div>

        </div>
    </>)
}