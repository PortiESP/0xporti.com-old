// Sections
import Header from "@/components/header/Header"
import Welcome from "./Welcome"
import Skills from "./Skills"
import Work from "./Work"

import sass from "./styles/about.module.scss"



export default function Page(){
    
    return (
        <div className={sass.div__about_wrap}>
            
            <Header title="MY PORTFOLIO"/>
            <Welcome />
            <Skills />
            <Work />

        </div>
    )
}