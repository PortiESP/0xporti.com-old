import Header from "@/components/header/Header";
import sass from "./styles/resources.module.scss"
import Link from "next/link";



const sections = [
    {
        title: "🖼️ Graphic Resources",
        description: "My own illustrations I've created for my studies",
        url: "/resources/graphic"
    },
    {
        title: "🔗 External/Credits",
        description: "External resources like youtube channels, repositories, documentation, icons, etc...",
        url: "/resources/external"
    },
]





export default function External(){
    return (<>
        
        <Header title="RESOURCES"/>

        <div className={sass.div__wrap}>

            <h2 className={sass.h2__title}>🗄️ Resources 🗄️</h2>

            <div className={sass.div__sections_wrap}>
                {
                    sections.map( section => 
                        <Link href={section.url}>
                            <div className={sass.div__section}>
                                <h3>{section.title}</h3>
                                <p>{section.description}</p>
                            </div>
                        </Link>)
                }
            </div>
        </div>

    </>)
}