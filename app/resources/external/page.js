
import sass from "./styles/resources.module.scss"
import sectionsList from "@/api/resources/external"
import Header from "@/components/header/Header"
import Link from "next/link"
import Image from "next/image"
import BubbleScrollBar from "@/components/BubbleScrollBar/BubbleScrollBar"


const sections = [
    {label: "Creators", id: "creators"},
    {label: "Docs", id: "documentation"},
    {label: "Icons", id: "icons"},
    {label: "Color", id: "color"},
    {label: "Backgrounds", id: "backgrounds"},
    {label: "Chrome extensions", id: "chrome--extensions"},
    {label: "Fonts", id: "fonts"},
    {label: "Illustrations", id: "illustrations"},
    {label: "Images", id: "images"},
    {label: "UI Components", id: "components"},
]


function ResourceComp(props){

    return (
    <Link href={props.url} target="_blank" passHref>
        <div className={sass.div__resource_wrap}>
            {
                props.image &&
                <div className={sass.div__resource_image}>
                    <Image alt="Resource image thumbnail" src={props.image} fill/>
                    <Image alt="Resource image thumbnail" src={props.image} fill/>
                </div>
            }
            <div className={[sass.div__resource_data, props.image && sass.hasImage].join(" ")}>
                <div>
                    <h3>
                    🔗 {props.title}
                    </h3>
                    <p>{props.description}</p>
                </div>
                <span>{props.url}</span>
            </div>
            {props.featured && <span className={sass.span__featured}>⭐</span>}
        </div>
    </Link>
    )
}

function ResourceSection(props){

    return (
        <section className={sass.section} id={props.data.id}>
            <h2>{props.data.title}</h2>
            <div className={sass.div__section_items}>
                {
                    props.data.items.map( (item,i) => <ResourceComp key={i} {...item}/>)
                }
            </div>
        </section>
    )
}

export default function Resources(){


    return (
        <>
            <Header title="EXTERNAL RESOURCES" />
            <div className={sass.div__resources_wrap}>

                <div className={sass.div__title}>
                    <h1><span className={sass.book1}>🏷️</span> My resources bibliography 🏷️</h1>
                    <p>This the my personal vault with illustrations, notes, bibliography, etc...</p>
                </div>

                <div className={sass.div__content}>
                    { sectionsList.map( (sectionData, i) => <ResourceSection key={i} data={sectionData}/>) }
                </div>

            </div>

            <BubbleScrollBar sections={sections}/>
        </>
    )
}