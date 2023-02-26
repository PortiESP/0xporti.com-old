'use client'

import sass from "./styles/PostMainContent.module.scss"
import Image from "next/image"

// import postContent from "@/api/blog/posts/arch-install"

export default function PostMainContent(props){

    
    // const imageData = require(`@/blogImages/thumbnails/${props.metadata.thumbnail}`)
    // console.log(imageData)

    return (
        <div className={sass.div__mainContent_wrap}>
            {
                // !props.metadata?.disableThumbnail && imageData && <>
                //     <div className={sass.div__thumbnail}>
                //         <Image src={imageData.default} alt="Thumbnail image" objectFit="contain" height={imageData?.default.height}/>
                //     </div>
                // </>
            }
            
            <div className={sass.div__mainContent}>
                {props.content}
            </div>
        </div>
    )
}

