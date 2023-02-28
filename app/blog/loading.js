// This page is for testing layouts
'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import sass from "./styles/loading.module.scss"


export default function Loading(){

    const [text, setText] = useState("⏳d Loading your page... ⌛")
    useEffect(()=>{
        const interval = setInterval( () => {setText(old => old[0] === "⏳" ? "⌛ Loading your page... ⏳" : "⏳ Loading your page... ⌛")}, 500)

        return ()=> clearInterval(interval)
    })

    return (<>
    <div className={sass.div__main}>

        <div className={sass.div__logo}>
            <Image alt="Logo" src="/assets/images/0xPorti_logo.svg" fill/>
        </div>
        <h1 className={sass.h1__title}>{text}</h1>
    
    </div>
    </>)
}