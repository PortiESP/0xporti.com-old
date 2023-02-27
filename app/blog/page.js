import BlogBody from "./Body"
import Header from "@/components/header/Header"
import Head from "next/head"

export default function Blog(){

    return (
        <div >
            <Head>
                <title>Blog - [porti.dev]</title>
            </Head>
            <Header title="BLOG" bg="#282828"/>
            <BlogBody />
        </div>
    )
}