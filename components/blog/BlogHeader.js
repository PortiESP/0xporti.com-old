import Image from "next/image"
import {useRouter} from "next/router"
import sass from "@/styles/blog/BlogHeader.module.scss"
// API Data
import {featuredPostData} from "@/api/blog/featured"

export default function Header(){

    const router = useRouter()

    return (
        <div className={sass.div__header_wrap} id="div_header_wrap">
            
            <div className={sass.div__hero_wrap}>
                <h1>Blog</h1>
            </div>

            <div className={sass.div__featured_wrap} >
                <div className={sass.div__featured}>
                    <a href={"/blog/" + featuredPostData.id}>

                        <div className={sass.div__featured_image}>
                            <Image src={featuredPostData.image} alt="" {...featuredPostData.image} />
                        </div>
                        <div className={sass.div__featured_data}>
                            <h2>{featuredPostData.title}</h2>
                            <p>{featuredPostData.description}</p>
                        </div>
                        <span className={sass.span__featured}><i>Featured post:</i></span>

                    </a>
                </div>
            </div>
            
            <div className={sass.div__props_wrap}>
                <div className={sass.prop1_wrap}><div className={sass.prop1}/></div>
            </div>
            
        </div>
    )
}