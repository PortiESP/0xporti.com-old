'use client'

import sass from "./styles/Body.module.scss"
import PostCard from "./PostCard" // Component
import React, {useState, useEffect} from "react"
// API Data
import { categoriesStyle } from "@/api/blog/categoriesStyle"
import postData from "@/api/blog/postData"



function filterPosts(filterList, searchQuery){

    function filterCat(post, categories){
        return typeof categories === "string" 
        ?
        post.category.find( kw => kw.match(RegExp("^" + categories, "i")))
        :
        categories.map( cat => post.category.find(kw => kw.match(RegExp("^" + cat, "i"))) ).every(e=>e)
    
    }
    
    function parseDate(date){
        return new Date(...date.split("/").reverse()).getTime()
    }
    

    let filteredList = Object.values(postData).filter( metadata => {

        const query = {...Object.fromEntries(filterList), any:searchQuery}

        const evaluation = [
            // Check if property exists ? Evaluate condition : return true if property filter is not selected
            query.id ? query.id === metadata.id : true,
            query.title ? metadata.title.match(RegExp( query.title, "i")) : true,
            query.description ? metadata.description.match(RegExp( query.description, "i")) : true,
            query.category ?  filterCat(metadata, query.category): true,
            query.keywords ? metadata.keywords ? metadata.keywords.find( kw => kw.match(RegExp("^" + (query.keywords.split && query.keywords || query.keywords.join("|")), "i"))  ) : false : true,
            query.author ? metadata.author.match(RegExp( query.author, "i")) : true,
            query.hidden ? metadata.hidden === query.hidden : true,
            query.date ? parseDate(metadata.lastUpdate) === parseDate(query.date) : true,
            query.olderthan ? parseDate(metadata.lastUpdate) <= parseDate(query.olderthan) : true,
            query.youngerthan ? parseDate(metadata.lastUpdate) >= parseDate(query.youngerthan) : true,
            query.any ? JSON.stringify(metadata).match(RegExp(query.any, "i")) : true,
        ].every(e=>e)

        return evaluation
        // console.log(metadata.id, res, query, metadata)

    })

    // Order posts from the most recent
    filteredList.sort((a,b) => parseDate(b.lastUpdate) - parseDate(a.lastUpdate))

    return filteredList
}


export default function Body(){

    const [searchValue, setSearchValue] = useState("")
    const [searchResults, setSearchResults] = useState(Object.values(postData).reverse())
    const [searchFilters, setSearchFilters] = useState([]) // [ ["category", "info"], ["category", "docs"], ["id", 1] ]
    const [showAddFilters, setShowAddFilters] = useState(false)


    useEffect(()=>{
        // postFilteredList = searchFilters.length ? Object.entries(searchResults).reverse() : filterPosts()

        // Post cards components array
        setSearchResults( filterPosts(searchFilters, searchValue) )
        // console.log(searchResults)
    }, [searchFilters, searchValue])


    return (
        <div className={sass.div__body_wrap} id="blog--posts">
            
            {/* Search bar */}
            <div className={sass.div__search}>
                <input type="text" placeholder="Latest posts" value={searchValue} onChange={ e => setSearchValue(e.target.value)}/>
                <div>
                    <button onClick={()=>setSearchValue("")}>+</button>
                </div>
            </div>
            
            {/* Filters */}
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
                
            
            {/* Post card */}
            <div className={sass.div__posts_wrap}>{searchResults.map( post => <PostCard key={post.id} {...post} setFilter={setSearchFilters}/>)}</div>
        </div>
    )
}