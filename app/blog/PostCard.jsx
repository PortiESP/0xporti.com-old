import sass from "./styles/PostCard.module.scss"
import Image from "next/image"
import { categoriesStyle } from "@/api/blog/categoriesStyle"

export default function PostCard(props){

    const imageData = require(`@/blogImages/thumbnails/${props.thumbnail}`)

    function setLoadingPointer(e){
        e.target.style.cursor = "progress"
    }

    return (
        <div className={sass.div__postCard_wrap}>
            <a href={`/blog/post/${props.id}`} onClick={()=> console.log("click")}>
                
                <div className={sass.div__card_image} onClick={setLoadingPointer}>
                    <Image src={imageData} alt="Post thumnail" fill />
                    <Image src={imageData} alt="Post thumnail blur" fill/>
                </div>
                <div className={sass.div__card_data} onClick={setLoadingPointer}>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className={sass.div__card_category}>
                    {props.category.map( (cat, i) => <div key={i} className={sass.div__category} style={categoriesStyle[cat]} 
                                                        onClick={ e => {e.preventDefault();props.setFilter( old =>  [...old, ["category", e.target.innerText]] )}}>{cat}
                                                    </div>)}
                </div>
                { props.label && <span className={sass.span__label} style={props.label.style}>{props.label.text}</span> }
            
            </a>
        </div>
    )
}