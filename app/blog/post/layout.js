

import PostBody from "./PostBody"
import Head from "next/head"
import Header from "@/components/header/Header"



const fetchPostMetadata = (id) => {
    return fetch(`http://localhost:3000/api/blog/posts?id=${id}`)
                        .then(res => res.json())
}


// The code that will be nested into the MainContent
export default async function PostPage(props){

    const metadata = await fetchPostMetadata(props.params.postId)

    return (
        <>
            <Head>
                <title>{metadata && metadata.title + " - [porti.dev]" || ""}</title>
                <meta name="description" content={metadata.description || "Default decription"}/>
                <meta name="keywords" content={(metadata.keywords || []).concat(metadata.category || []).concat('Porti')} />
                <meta name="author" content={metadata.author || "Porti"} />
            </Head>
            <Header title="BLOG" />
            <PostBody metadata={metadata} content={props.children}/>
            
        </>
    )
}

