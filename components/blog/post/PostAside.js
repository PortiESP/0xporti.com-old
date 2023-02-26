import sass from "@/styles/blog/post/PostAside.module.scss"
import Image from "next/image"
import {featuredPostData} from "@/api/blog/featured"
import SocialButtons from "@/components/SocialButtons/SocialButtons"
import Link from "next/link"



export default function PostAside(){

    return (
        <div className={sass.div__aside_wrap}>
            <div className={sass.div__aside_social}>
                <SocialButtons/>
            </div>

            <div className={sass.div__aside_featured} onClick={()=> window.location.href = "/blog/" + featuredPostData.id}>
                    <div className={sass.div__featured}>
                        <div className={sass.div__featured_image}>
                            <Image src={featuredPostData.image} alt="Featured img" layout="fill" objectFit="cover"/>
                            <Image src={featuredPostData.image} alt="Featured img" layout="fill" objectFit="contain"/>
                        </div>
                        <div className={sass.div__featured_data}>
                            <h2>{featuredPostData.title}</h2>
                            <p>{featuredPostData.description}</p>
                        </div>
                        <span className={sass.span__featured}><i>Featured post:</i></span>
                    </div>
            </div>
        </div>
    )
}