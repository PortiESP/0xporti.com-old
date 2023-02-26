import React from "react"
import Image from "next/image"
import Link from "next/link"
import SearchBar from "../../SearchBar/SearchBar"
import { useRouter } from "next/router"
// Styles
import sass from "@/styles/blog/post/PostHeader.module.scss"
import imgPerson from "@/assets/images/MainLogo.png"



export default function PostHeader(){

    const router = useRouter()
    const [searchValue, setSearchValue] = React.useState("")

    return (
        <div className={sass.div__header_wrap}>
            <div className={sass.div__image} onClick={()=>router.push("/blog#blog--posts")}>
                <Image src={imgPerson.src} alt="Profile pic" width="200px" height="200px" objectFit="cover"/>
            </div>
            <div className={sass.div__search}>
                <SearchBar suggestions apiUrl={"/api/blog/posts?order=recent&any=$VALUE$"}/>
            </div>
            <div>
                <nav>
                    <Link href="/">⌂</Link>
                </nav>
            </div>
        </div>
    )
}