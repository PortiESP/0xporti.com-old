import sass from "./styles/resources.module.scss"
import sectionsList from "@/api/resources/sections"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import Head from "next/head"
import Link from "next/link"

function ResourceComp(props){


    return (
    <Link href={props.url} passHref>
        <div className={sass.div__resource_wrap}>
            <h3>
                {props.title}
            </h3>
            <p>{props.description}</p>
            <span>{props.url}</span>
            {props.featured && <span>⭐</span>}
        </div>
    </Link>
    )
}

function ResourceSection(props){
    return (
        <section className={sass.section}>
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
        <Head>
            <title>Dev. resources - [porti.dev]</title>
        </Head>
        <div className={sass.wrap}>
            <Header title="RESOURCES"/>
            <div className={sass.div__resources_wrap}>
                <div className={sass.div__title}>
                    <h1><span className={sass.book1}>📚</span> My resources bibliography 📚</h1>
                    <p>This the my personal bibliography with useful sites I have used, here we have sites for documentation, icons, images, etc...</p>
                </div>

                <div className={sass.div__content}>
                    {sectionsList.map( (sectionData, i) => <ResourceSection key={i} data={sectionData}/>)}
                </div>
            </div>
            <Footer bg="#151515dd"/>
        </div>
        </>
    )
}