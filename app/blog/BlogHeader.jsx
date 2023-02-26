import Image from "next/image"
import Link from "next/link"
import sass from "./styles/BlogHeader.module.scss"
// API Data
import {featuredPostData} from "@/api/blog/featured"

export default function Header(){


    return (
        <div className={sass.div__header_wrap} id="div_header_wrap">
            
            <div className={sass.div__hero_wrap}>
                <h1>Blog</h1>
            </div>

            <div className={sass.div__featured_wrap} >
                <div className={sass.div__featured}>
                    <Link href={"/blog/" + featuredPostData.id}>

                        <div className={sass.div__featured_image}>
                            <Image src={featuredPostData.image} alt="" {...featuredPostData.image} />
                        </div>
                        <div className={sass.div__featured_data}>
                            <h2>{featuredPostData.title}</h2>
                            <p>{featuredPostData.description}</p>
                        </div>
                        <span className={sass.span__featured}><i>Featured post:</i></span>

                    </Link>
                </div>
            </div>
            
            <div className={sass.div__props_wrap}>
                <div className={sass.prop1_wrap}><div className={sass.prop1}/></div>
            </div>
            
        </div>
    )
}