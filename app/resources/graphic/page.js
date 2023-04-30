import ResourceFinder from "@/components/ResourceFinder/ResourceFinder"
import sass from "./styles/graphic.module.scss"
import elements from "@/api/resources/graphic"


export default function Graphic(){


    return (<div className={sass.div__wrap}>
        <h2 className={sass.h2__title}>Resource Finder</h2>
        <div className={sass.div__resourcefinder}>
            <ResourceFinder elements={elements} categories={["Test", "Test2"]}/>
        </div>
    </div>)
}