import sass from "@/styles/blog/post/PostMainContent.module.scss"
import Image from "next/image"

export default function PostMainContent(props){

    const imageData = props.metadata ? require(`@/blogImages/thumbnails/${props.metadata.thumbnail}`): undefined

    return (
        <div className={sass.div__mainContent_wrap}>
            {
                !props.metadata?.disableThumbnail && imageData && <>
                    <div className={sass.div__thumbnail}>
                        <Image src={imageData.default} alt="Thumbnail image" objectFit="contain" height={imageData?.default.height}/>
                    </div>
                </>
            }
            
            <div className={sass.div__mainContent}>
                {props.postJSX}
            </div>
        </div>
    )
}

