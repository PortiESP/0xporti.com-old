import PostMainContent from "./PostMainContent"
import PostAside from "./PostAside"
import BlogFooter from "@/components/footer/Footer"
import JumpUpButton from "@/components/JumpUpButton/button"

// Styles
import sass from "@/styles/blog/post/PostBody.module.scss"

export default function PostBody(props){


    return (
        <>
            <div className={sass.div__body_wrap}>
                <PostMainContent postJSX={props.postJSX} metadata={props.metadata}/>
                <PostAside />
            </div>
            <BlogFooter />
            <JumpUpButton />
        </>
    )
}