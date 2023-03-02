import PostMainContent from "./PostMainContent"
import PostAside from "./PostAside"
import JumpUpButton from "@/components/JumpUpButton/button"

// Styles
import sass from "./styles/PostBody.module.scss"

export default function PostBody(props){    

    return (
        <>
            <div className={sass.div__body_wrap}>
                <PostMainContent metadata={props.metadata} content={props.children}/>
                <PostAside />
            </div>
            <JumpUpButton />
        </>
    )
}