'use client'

import sass from "./styles/PostMainContent.module.scss"
import Image from "next/image"
import {usePathname} from "next/navigation"
import postData from "@/api/blog/postData"

export default function PostMainContent(props){

    const postId = usePathname().split("/").slice(-1)[0].replaceAll("-", "_") || undefined
    console.log(postId)
    const metadata = postId ? postData[postId] : undefined
    console.log(metadata)
    const imageData = metadata && require(`@/blogImages/thumbnails/${metadata.thumbnail}`)
    console.log(imageData)

    return (
        <div className={sass.div__mainContent_wrap}>
            {
                !metadata?.disableThumbnail && imageData && <>
                    <div className={sass.div__thumbnail} style={{height: imageData?.default.height}}>
                        <Image src={imageData.default} alt="Thumbnail image" fill />
                    </div>
                </>
            }
            
            <div className={sass.div__mainContent}>
                {props.content}
            </div>
        </div>
    )
}

