'use client'

import sass from "./header.module.scss"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/MainLogo.svg"

import { useState } from "react"

export default function Header(props){

    const [hamburger, setHamburger] = useState(false)

    return (
        <header className={sass.header} style={{background: props.bg}}>

            <div className={sass.div__brand}>
                <div className={sass.div__brand_img}>
                    <Image src={logo} alt="Logo" layout="fill" objectFit="contain" priority/>
                </div>
                <h2>{props.title}</h2>
            </div>

            {props.section &&
                <div className={sass.div__section}>{props.section || "Section"}</div>
            }

            <nav className={sass.nav}>
                <span className={sass.span__nav_icon} onClick={()=> setHamburger( old => !old)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg>
                </span>
                <div className={[sass.div__nav_items, !hamburger && sass.hide].join(" ")}>
                    <svg onClick={()=> setHamburger( old => !old)} className={sass.svg__icon_close} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
                    <Link href="/"><div className={sass.div__nav_item} style={{"--color": "#ff2"}} >BLOG</div></Link>
                    <Link href="/resources"><div className={sass.div__nav_item} style={{"--color": "#b006f0"}} >RESOURCES</div></Link>
                    <Link href="/about"><div className={sass.div__nav_item} style={{"--color": "#f00"}} >ABOUT</div></Link>
                </div>
            </nav>

        </header>
    )
}