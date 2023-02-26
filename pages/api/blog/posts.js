import postsData from "./postData"

/* =======[ Post object structure ]======
{
    id: 1,
    category: [],
    title: "",
    description: "",
    thumbnail: "",
    label: {
        text: "New post!"
        style: {}
    }    
    keywords: "",
    author: "",
},    
*/

// Debug mode
import {categoriesStyle} from "./categoriesStyle";
// ----------

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

// Function 
export function checkPostDataMatch(post, query){

    // Define some inline conditions for the post and return true only if all conditions were true
    return [
        // Check if property exists ? Evaluate condition : return true if property filter is not selected
        query.id ? query.id === post.id : true,
        query.title ? post.title.match(RegExp( query.title, "i")) : true,
        query.description ? post.description.match(RegExp( query.description, "i")) : true,
        query.category ?  filterCat(post, query.category): true,
        query.keywords ? post.keywords ? post.keywords.find( kw => kw.match(RegExp("^" + (query.keywords.split && query.keywords || query.keywords.join("|")), "i"))  ) : false : true,
        query.author ? post.author.match(RegExp( query.author, "i")) : true,
        query.hidden ? post.hidden === query.hidden : true,
        query.date ? parseDate(post.lastUpdate) === parseDate(query.date) : true,
        query.olderthan ? parseDate(post.lastUpdate) <= parseDate(query.olderthan) : true,
        query.youngerthan ? parseDate(post.lastUpdate) >= parseDate(query.youngerthan) : true,
        query.any ? JSON.stringify(post).match(RegExp(query.any, "i")) : true,
    ].every(e=>e)
}

// API Endpoint handler
export default function apiEndpoint({query}, res){
    // Copy posts & Response filter builder
    let servePosts = [...postsData].filter( post => checkPostDataMatch(post, query) )
    servePosts = servePosts.sort( (a,b) => parseDate(a.lastUpdate) - parseDate(b.lastUpdate) )
    
    if ( query.order === "recent" ){
        servePosts = servePosts.reverse()
    }

    if ( query.limit ){
        servePosts = servePosts.slice(0, query.limit)
    }

    res.status(200).json(servePosts)
}    


export {postsData};



/*

> ==================================[API Docs]================================= <
 
 # Parameters
 
 // Filters
 - id
 - title
 - category
 - author
 - description
 - keywords
 - hidden
 - date    // Exact date
 - olderthan    
 - youngerthan    
 - any     // Filter by any field

 // Other parameters
 - order   // Order results, default oldest posts, takes values: "recent" for order by recent posts
 - limit   // Number of results returned


*/