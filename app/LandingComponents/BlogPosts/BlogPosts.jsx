
import styles from "./BlogPosts.module.scss"
import PostCard from "./PostCard"

const testPosts = [
    {title: "Test 1", description: "This is a template text", tags: ["#hola", "#adios", "#adios"], thumbnail: "template.svg"},
    {title: "Test 1", description: "This is a template text", tags: ["#hola", "#adios", "#adios"], thumbnail: "template.svg"},
    {title: "Test 1", description: "This is a temdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddplate text", tags: ["#hola", "#adios", "#adios"], thumbnail: "template.svg"},
    {title: "Test 1", description: "This is a template text", tags: ["#hola", "#adios", "#adios"], thumbnail: "template.svg"},
    {title: "Test 1", description: "This is a template text", tags: ["#hola", "#adios", "#adios"], thumbnail: "template.svg"},
    {title: "Test 1", description: "This is a template text", tags: ["#hola", "#adios", "#adios"], thumbnail: "template.svg"},
]

export default function BlogPostsGrid(){
    
    return (<>
        <div className={styles.div__grid_main}>
            {testPosts.map((post, i) => <PostCard key={i} {...post}/>)}
        </div>
    </>)
}