'use client'

import PostBody from "./PostBody"
import Header from "@/components/header/Header"
import {usePathname} from "next/navigation"
import metadataList from "@/api/blog/postData"


// The code that will be nested into the MainContent
export default function PostPage(props){
    
    const id = usePathname().split('/')[3] || ''
    const metadata = metadataList[metadataList.indexOf(metadataList.filter( post => post.id === id)[0])]

    return (
        <>
            <Header title="BLOG" />
            <PostBody metadata={metadata}>{props.children}</PostBody>
        </>
    )
}

