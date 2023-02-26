import sass from "./style.module.scss"
import {useState, useEffect} from "react"
import { useRouter } from "next/router"
import Image from "next/image"

export default function SearchBar(props){
    
    const router = useRouter()
    const [searchValue, setSearchValue] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(false)

    // Serch value listener
    useEffect(()=>{
        fetch(props.apiUrl.replace("$VALUE$", searchValue)).then( res => res.json()).then( res => setSearchResults(res))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])


    function exitResultsScreen(event){
        if (event.target.className !== sass.div__search_screen){return} 
        setShowResults(false)
    }

    
    return (
        <>
        <div className={sass.div__search_wrap} >
            <div className={sass.div__image} onClick={ ()=> setShowResults(true)}>
                <Image src="/assets/icons/browse.png" alt="" layout="fill" objectFit="contain"/>
            </div>
        </div>
        
            { showResults && 
            <div className={sass.div__search_screen} onClick={ e => exitResultsScreen(e)}>
                <div className={sass.div__search_menu}>

                    <div className={sass.div__searchbar}>
                        <input type="text" 
                                placeholder="Search something..." 
                                onChange={ ({target}) => setSearchValue(target.value)}
                                value={searchValue}
                                />
                    
                        { searchValue && <button className={[sass.button_clear, searchValue ? "": sass.hidden].join(" ")} onClick={ () => setSearchValue("") }>x</button> }
                    </div>


                    <div className={sass.div__results_wrap}>
                        {searchResults.map( res => {
                            return (
                                <div key={res.id} className={sass.div__result} onClick={()=>{router.push(`/blog/${res.id}`); setShowResults(false)}}>
                                    <h4>{res.title}</h4>
                                    <p>{res.description}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            }
            </>

        
    )
}