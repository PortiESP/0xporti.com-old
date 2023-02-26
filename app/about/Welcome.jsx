
import Image from "next/image"
// Styles
import sass from "./styles/Welcome.module.scss"
import profilePic from "@/assets/images/kenny.png"
import SocialButtons from "@/components/SocialButtons/SocialButtons"



export default function Welcome(){

   
    return (
        <section className={sass.section__welcome} id="section--welcome">
           
            <div className={sass.div__welcome_wrap}>
                <div className={sass.div__name}><h1>PORTI</h1><h3>{"// Full-Stack & software developer"}</h3></div>
                <div className={sass.div__separator}></div>
                <div className={sass.div__image}><Image src={profilePic} className={sass.image_profile} fill alt="Profile pic" priority/></div>
            </div>
            
            <div className={sass.div__social}>
                <SocialButtons/>
            </div>
            
        </section>
    )
}