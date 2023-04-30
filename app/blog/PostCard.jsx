import sass from "./styles/PostCard.module.scss"
import Image from "next/image"
import Link from "next/link"
import tagsStyles from "@/api/blog/tagsStyles"

export default function PostCard(props){

    const imageData = props.thumbnail ? require(`@/blogImages/thumbnails/${props.thumbnail}`) : require("@/blogImages/thumbnails/default_thumbnail.svg")

    return (
        <div className={sass.div__postCard_wrap}>
            <div className={sass.div__postCard}>
                <Link href={`/blog/post/${props.id}`} prefetch={false}>
                    
                    {/* Thumbnail */}
                    <div className={sass.div__card_image}>
                        <Image src={imageData} alt="Post thumnail" fill />
                        <Image src={imageData} alt="Post thumnail blur" fill/>
                    </div>

                    {/* Data */}
                    <div className={sass.div__card_data}>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>

                    {/* Tags */}
                    <div className={sass.div__card_tag}>
                        {props.tags.map( (tag, i) => <div key={i} className={sass.div__tag} style={tagsStyles[tag]} 
                                                                onClick={ e => {
                                                                    e.preventDefault();
                                                                    props.setFilter( old => old.includes(tag) ? old : [...old, tag] )}
                                                                }
                                                            >#{tag}
                                                        </div>)}
                    </div>
                    { props.label && <span className={sass.span__label} style={props.label.style}>{props.label.text}</span> }
                
                </Link>
            </div>
        </div>
    )
}