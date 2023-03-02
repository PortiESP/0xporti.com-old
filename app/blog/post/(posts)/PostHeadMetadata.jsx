
import {usePathname} from "next/navigation"
import metadataList from "@/api/blog/postData"


// export default async function test(){
//     const ret = {title: "test"}
//     // const id = await usePathname().split('/')[3] || ''
//     // const metadata = metadataList[metadataList.indexOf(metadataList.filter( post => post.id === id)[0])]
//     return ret
// }

// export default function GetHeader(){

//     console.log("...................")

//     const id = usePathname().split('/')[3] || ''
//     const metadata = metadataList[metadataList.indexOf(metadataList.filter( post => post.id === id)[0])]

//     return (<>
//             <title>{metadata.title + " - [porti.dev]" || ""}</title>
//             <meta name="description" content={metadata.description || "Default decription"}/>
//             <meta name="keywords" content={(metadata.keywords || []).concat(metadata.category || []).concat('Porti')} />
//             <meta name="author" content={metadata.author || "Porti"} />
//     </>)
// }