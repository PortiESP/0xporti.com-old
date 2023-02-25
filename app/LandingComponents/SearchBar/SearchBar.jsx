import Image from "next/image";
import styles from "./SearchBar.module.scss"

export default function SearchBar(){

    return (<>
        <div className={styles.div__searchbar_main}>
            <input type="text" placeholder="Type something here..."></input>
            <Image alt="Search icon" src="/assets/icons/search.svg" width="20" height="20"/>
        </div>
    </>)
}