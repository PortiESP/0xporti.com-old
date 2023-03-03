import sass from "./styles/PostCard.module.scss"
import Image from "next/image"
import Link from "next/link"
import { categoriesStyle } from "@/api/blog/categoriesStyle"

export default function PostCard(props){

    const imageData = require(`@/blogImages/thumbnails/${props.thumbnail}`)

    return (
        <div className={sass.div__postCard_wrap}>
            <div className={sass.div__postCard}>
                <Link href={`/blog/post/${props.id}`}>
                    
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

                    {/* Category */}
                    <div className={sass.div__card_category}>
                        {props.category.map( (cat, i) => <div key={i} className={sass.div__category} style={categoriesStyle[cat]} 
                                                                onClick={ e => {
                                                                    e.preventDefault();
                                                                    props.setFilter( old =>  [...old, ["category", cat]] )}
                                                                }
                                                            >#{cat}
                                                        </div>)}
                    </div>
                    { props.label && <span className={sass.span__label} style={props.label.style}>{props.label.text}</span> }
                
                </Link>
            </div>
        </div>
    )
}