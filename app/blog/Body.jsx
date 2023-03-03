'use client'

import sass from "./styles/Body.module.scss"
import PostCard from "./PostCard" // Component
import React, {useState, useEffect} from "react"
// API Data
import { categoriesStyle } from "@/api/blog/categoriesStyle"
import postData from "@/api/blog/postData"



function filterPosts(filterList, searchQuery){

    function filterTag(post, tags){
        return typeof tags === "string" 
        ?
        post.tags.find( kw => kw.match(RegExp("^" + categories, "i")))
        :
        tags.map( cat => post.tags.find(kw => kw.match(RegExp("^" + cat, "i"))) ).every(e=>e)
    
    }
    
    function parseDate(date){
        return new Date(...date.split("/").reverse()).getTime()
    }
    

    let filteredList = Object.values(postData).filter( metadata => {

        const query = {...filterList, any:searchQuery}

        const evaluation = [
            // Check if property exists ? Evaluate condition : return true if property filter is not selected
            query.id ? query.id === metadata.id : true,
            query.title ? metadata.title.match(RegExp( query.title, "i")) : true,
            query.description ? metadata.description.match(RegExp( query.description, "i")) : true,
            query.tags ?  filterTag(metadata, query.tags): true,
            query.keywords ? metadata.keywords ? metadata.keywords.find( kw => kw.match(RegExp("^" + (query.keywords.split && query.keywords || query.keywords.join("|")), "i"))  ) : false : true,
            query.author ? metadata.author.match(RegExp( query.author, "i")) : true,
            query.hidden ? metadata.hidden === query.hidden : true,
            query.date ? parseDate(metadata.lastUpdate) === parseDate(query.date) : true,
            query.olderthan ? parseDate(metadata.lastUpdate) <= parseDate(query.olderthan) : true,
            query.youngerthan ? parseDate(metadata.lastUpdate) >= parseDate(query.youngerthan) : true,
            query.any ? JSON.stringify(metadata).match(RegExp(query.any, "i")) : true,
        ].every(e=>e)

        return evaluation

    })

    // Order posts from the most recent
    filteredList.sort((a,b) => parseDate(b.lastUpdate) - parseDate(a.lastUpdate))

    // Hide posts with the hidden filed set to "true"
    filteredList = filteredList.filter(item => item.hidden === "false")

    return filteredList
}


export default function Body(){

    const [searchValue, setSearchValue] = useState("")
    const [filterTags, setFilterTags] = useState([]) // ["tag1", "tag2", ...]
    const [searchResults, setSearchResults] = useState(filterPosts({tags:filterTags,}, searchValue))
    const [showAddFilters, setShowAddFilters] = useState(false)


    useEffect(()=>{
        // Post cards components array
        setSearchResults( filterPosts({tags:filterTags,}, searchValue) )
    }, [filterTags, searchValue])


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
                                        onClick={ () => setFilterTags( old => [...old, pair[0]]) }
                                        >#{pair[0]}</span>
                                    )
                                }
                            </div>
                        }
                    </div>
                    {
                        filterTags.map( (tag,i) => tag && <span key={i} className={sass.span__filter} 
                                                    style={categoriesStyle[tag]}
                                                    onClick={ ()=> setFilterTags( old => old.filter( old_t => tag != old_t) ) }
                                                    >#{tag}</span>
                                        )
                    }
                </div>
            </div>
                
            
            {/* Post card */}
            <div className={sass.div__posts_wrap}>{searchResults.map( post => <PostCard key={post.id} {...post} setFilter={setFilterTags}/>)}</div>
        </div>
    )
}