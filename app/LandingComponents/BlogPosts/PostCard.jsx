import Image from "next/image"
import styles from "./PostCard.module.scss"

export default function PostCard(props){

        return (<>
            <div className={styles.div__postcard_main}>
                <div className={styles.div__postcard}>
                    <div className={styles.div__thumbnail}>
                        <Image alt="Post Thumbnail" className={styles.img__bg} fill src={`/assets/images/blog/thumbnails/${props.thumbnail}`}/>
                        <Image alt="Post Thumbnail" className={styles.img__fg} fill src={`/assets/images/blog/thumbnails/${props.thumbnail}`}/>
                    </div>
                    <div className={styles.div__info}>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className={styles.div__tags}>
                        <hr/>
                        {
                            props.tags && props.tags.map(tag => <div className={styles.div__tag}>{tag}</div>)
                        }
                    </div>
                </div>
            </div>
        </>)
}