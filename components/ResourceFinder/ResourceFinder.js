"use client"

import Image from "next/image"
import sass from "./styles/ResourceFinder.module.scss"
import sassE from "./styles/ResourceElement.module.scss"

import Link from "next/link"
import { useState } from "react"



function ResourceElement({data, root}){
    return (<Link href={`${root}/${data.url}`}><div className={sassE.div__resource}>
        <div className={sassE.div__thumbnail}>
            <Image src={data.image} fill alt="thumbnail blur"/>
            <Image src={data.image} fill alt="thumbnail"/>
        </div>
        <div className={sassE.div__data}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    </div></Link>)
}

/**
 * PROPS
 * 
 * @param {object} elements - Data of the elements displayed in the list (see the API for a example of the object structure)
 * @param {list} categories - List of strings
 * @param {string} root - Root of the path of the url of the resources (optional)
 * 
 */
export default function ResourceFinder(props){

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("all")

    // Filtered data
    const filtered = props.elements?.filter(edata=>{
        console.log(edata)
        return [  // Filters list
            search ? JSON.stringify(edata, ((k,v)=>k==="url"?undefined:v))  // Stringify the JSON but skip the "url" key
                .toLowerCase()  // Ignore case
                .includes(search)  // Value is in the JSON
                : true,  // If not search value, match all
            category!=="all" ? edata.categories?.includes(category) : true,  // If not search value, match all
        ].every(a=>a)
    })

    
    return (<div className={sass.div__wrap}>
        <div className={sass.div__header}>
            <div className={sass.div__header_search}>
                <input value={search} onChange={e=>setSearch(e.target.value)}/>
            </div>
            <div className={sass.div__header_options}>
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    {
                        props.categories?.length && 
                        ["All", ...props.categories].map(e=><option key={e} value={e.toLowerCase()}>{e}</option>)
                        
                    }
                </select>
            </div>
        </div>
        <div className={sass.div__body}>
            {
                filtered?.map( (resourceData,i) => <ResourceElement key={i} data={resourceData} root={props.root}/>)
            }
        </div>
    </div>)
}