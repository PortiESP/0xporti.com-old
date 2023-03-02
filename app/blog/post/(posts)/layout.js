'use client'

import PostBody from "./PostBody"
import Header from "@/components/header/Header"

// The code that will be nested into the MainContent
export default function PostPage(props){

    return (
        <>
            <Header title="BLOG" />
            <PostBody>{props.children}</PostBody>
        </>
    )
}

