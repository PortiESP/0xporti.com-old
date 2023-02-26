import Image from "next/image"
import { useEffect, useState } from "react"
import Icon from "./assets/arrow_icon.svg"
import sass from "./styles.module.scss"

export default function JumpUpButton(){

    const [showBtn, setShowBtn] = useState(false)


    useEffect(()=>{
        function scrollEvent(){
            window.scrollY > window.innerHeight ? setShowBtn(true): setShowBtn(false)
        }

        document.addEventListener("scroll", scrollEvent)

        return ()=> document.removeEventListener("scroll", scrollEvent)
    }, [])

    return (
        <div className={[sass.div__button, showBtn && sass.show].join(" ")} onClick={()=>window.scrollTo(0,0)}>
            <div className={sass.div__image}>
                <Image src={Icon} layout="fill" objectFit="cover" alt="Up arrow icon" />
            </div>
        </div>
    )
}