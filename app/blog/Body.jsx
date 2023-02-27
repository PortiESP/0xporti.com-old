'use client'

import sass from "./styles/Body.module.scss"
import PostCard from "./PostCard" // Component
import React, {useState, useEffect} from "react"
// API Data
import { categoriesStyle } from "@/api/blog/categoriesStyle"
import {postsData} from "@/api/blog/postData"

export default function Body(){

    const [searchValue, setSearchValue] = useState("")
    const [searchResults, setSearchResults] = useState(postsData.reverse())
    const [searchFilters, setSearchFilters] = useState([]) // [ ["category", "info"], ["category", "docs"], ["id", 1] ]
    const [showAddFilters, setShowAddFilters] = useState(false)

    useEffect(()=>{

        fetch(`/api/blog/posts?order=recent&any=${searchValue}&${searchFilters.map( pair => `${pair[0].toLowerCase()}=${pair[1]}`).join("&")}`)
        .then( res => res.json())
        .then( res => setSearchResults(res))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, searchFilters])


    return (
        <div className={sass.div__body_wrap} id="blog--posts">
            
            <div className={sass.div__search}>
                <input type="text" placeholder="Latest posts" value={searchValue} onChange={ e => setSearchValue(e.target.value)}/>
                <div>
                    <button onClick={()=>setSearchValue("")}>+</button>
                </div>
            </div>
            
            
            <div className={sass.div__filters_wrap}>
                <div className={sass.span__filters_label}><span>Filters:</span></div>
                <div className={sass.div__filters}>
                    <div className={sass.div__addFilter}>
                        <span className={[sass.span__addFilter, showAddFilters && sass.addfilterfocus].join(" ")} onClick={ () => setShowAddFilters( old => !old )} >{showAddFilters ? "close": "Add filter +"}</span>
                        {
                            showAddFilters &&
                            <div className={sass.div__filterSelect}>
                                {
                                    Object.entries(categoriesStyle).map( (pair, i) => <span key={i} className={sass.span__filter} 
                                        style={pair[1]}
                                        onClick={ () => setSearchFilters( old =>  [ ...old, ["category", pair[0]] ]) }
                                        >#{pair[0]}</span>
                                    )
                                }
                            </div>
                        }
                    </div>
                    {
                        searchFilters.map( (pair,i) => <span key={i} className={sass.span__filter} 
                                                    style={categoriesStyle[pair[1]]}
                                                    onClick={ ()=> setSearchFilters( old =>  [...old].filter( data => data[1] !== pair[1]) ) }
                                                    >#{pair[1]}</span>
                                        )
                    }
                </div>
            </div>
                
            

            <div className={sass.div__posts_wrap}>
                {searchResults.map( post => post.hidden === "false" && <PostCard key={post.id} {...post} setFilter={setSearchFilters}/> )}
            </div>
        </div>
    )
}