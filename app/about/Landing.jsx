// Sections
import Header from "@/components/header/Header"
import Welcome from "./Welcome"
import Skills from "./Skills"
import Work from "./Work"

import sass from "./styles/Landing.module.scss"



export default function Landing(){



  

    return (
        <div className={sass.div__landing_wrap}>
            
            <Header title="MY PORTFOLIO"/>
            <Welcome />
            <Skills />
            <Work />

        </div>
    )
}