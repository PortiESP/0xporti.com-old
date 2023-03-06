import sass from "./styles/PostAside.module.scss"
import Image from "next/image"
import {featuredPostData} from "@/api/blog/featuredPost"
import SocialButtons from "@/components/SocialButtons/SocialButtons"
import Link from "next/link"



export default function PostAside(){

    return (
        <div className={sass.div__aside_wrap}>
            <div className={sass.div__aside_social}>
                <SocialButtons/>
            </div>

            <Link href={"/blog/post/" + featuredPostData.id} className={sass.a__aside_featured}>
                <div className={sass.div__aside_featured}>
                        <div className={sass.div__featured}>
                            <div className={sass.div__featured_image}>
                                <Image src={featuredPostData.image} alt="Featured img" fill />
                                <Image src={featuredPostData.image} alt="Featured img" fill />
                            </div>
                            <div className={sass.div__featured_data}>
                                <h2>{featuredPostData.title}</h2>
                                <p>{featuredPostData.description}</p>
                            </div>
                            <span className={sass.span__featured}>Featured post</span>
                        </div>
                </div>
            </Link>
        </div>
    )
}