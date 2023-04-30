"use client"

import sass from "./footer.module.scss"
import Image from "next/image"
import igIcon from "@/assets/icons/instagram.png"
import ytIcon from "@/assets/icons/youtube_B&N.svg"
import ghIcon from "@/assets/icons/github_icon.png"
import Link from "next/link"


export default function Footer(props){


    return (
        <div className={sass.div__footer_wrap} style={{background: props.bg}}>
            <div className={sass.div__footer_data}>
                <span className={sass.developer}>Developed by <span className={sass.name}>PORTI</span>, Madrid</span>
                <span className={sass.copyright}>porti © Copyright 2023</span>
                <span className={sass.msg}>This is a personal project so if there is any issues, misspelled words, inconsistent information or if you want to collaborate with the site please contact me.</span>
                <span className={sass.msg}>Credits to external resources and creators are located in the <Link href="/resources" onClick={()=>window.scrollTo(0,0)}>resources</Link> section</span>
            </div>
            <div className={sass.div__social_icons}>
                <div className={sass.div__social_icon}><Link href="https://www.instagram.com/portii.rm/" rel="noreferrer" target={"_blank"}><Image src={igIcon} fill alt="Instagram icon"></Image></Link></div>
                <div className={sass.div__social_icon}><Link href="https://www.youtube.com/@0xPorti" rel="noreferrer" target={"_blank"}><Image src={ytIcon} fill alt="Youtube icon"></Image></Link></div>
                <div className={sass.div__social_icon}><Link href="https://github.com/PortiESP" rel="noreferrer" target={"_blank"}><Image src={ghIcon} fill alt="Code-pen icon"></Image></Link></div>
            </div>
        </div>
)
}
