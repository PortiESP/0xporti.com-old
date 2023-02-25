import Image from "next/image"
import styles from "./Footer.module.scss"


export default function Footer(){

    return (<>
        <div className={styles.div__footer_main}>
            <div className={styles.div__hr}></div>
            <div className={styles.div__credits}>
                <p>Developed by <span>Jaime Portillo</span>, Madrid, 2023</p>
                <p>Hope you have found my articles useful, remember this is a personal site, feel free to contactme for contributions and issues </p>
            </div>
            <div className={styles.div__social}>
                <Image alt="Instagram icon" src="/assets/icons/instagram.png" width="30" height="30"/>
                <Image alt="Github icon" src="/assets/icons/github.svg" width="30" height="30"/>
                <Image alt="Codepen icon" src="/assets/icons/codepen.svg" width="30" height="30"/>
            </div>
        </div>
    </>)
}