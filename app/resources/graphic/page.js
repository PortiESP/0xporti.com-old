import ResourceFinder from "@/components/ResourceFinder/ResourceFinder"
import sass from "./styles/graphic.module.scss"
import elements from "@/api/resources/graphic"
import Header from "@/components/header/Header"


export default function Graphic(){


    return (<>
    <Header title="GRAPHIC RESOURCES" />
    <div className={sass.div__wrap}>
        <h2 className={sass.h2__title}>🔎 Resource Finder 🔎</h2>
        <div className={sass.div__resourcefinder}>
            <ResourceFinder elements={elements} />
        </div>
    </div>
    </>
    )
}