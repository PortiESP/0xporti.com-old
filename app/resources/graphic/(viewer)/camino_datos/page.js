import MindMap from "@/components/MarkupWidgets/tags/MindMap"
import sass from "./page.module.scss"
import SVGIMG from "./svg.jsx"

const controls = [
    {
        type: "chamber",
        label: "Vista",
        title: "Selecciona la vista que se va a motrar",
        initial: true,
        idsGroups: [
            {
                label: "Introduccion",
                ids: ["vista_intro"]
            },
            {
                label: "Ejemplo tipo R",
                ids: ["vista_ejm_R"],
                controls: [
                    {
                        type: "chamber",
                        label: "Pasos",
                        title: "Selecciona el paso del camino de datos que quieres mostrar",
                        initial: true,
                        idsGroups: [
                            {
                                label: "Paso 1",
                                ids: ["Paso1_anotaciones", "Paso1_guias"]
                            },
                            {
                                label: "Paso 2",
                                ids: ["Paso2_anotaciones", "Paso2_guias"]
                            },
                            {
                                label: "Paso 3",
                                ids: ["Paso3_anotaciones", "Paso3_guias"]
                            },
                            {
                                label: "Paso 4",
                                ids: ["Paso4_anotaciones", "Paso4_guias"]
                            },
                            {
                                label: "Paso 5",
                                ids: ["Paso5_anotaciones", "Paso5_guias"]
                            },
                        ]
                    },
                    {
                        type: "toggle",
                        label: "Anotaciones",
                        title: "Show/Hide the informative boxes",
                        ids: ["Anotaciones"],
                        initial: true,
                    },
                ]
            },
        ]
    }
]


export default function Page(){
    return (<>
        <div className={sass.div__wrap_frame}>
            <div className={sass.div__frame}>
                <MindMap width={1532} height={1038} controls={controls}>
                    {SVGIMG}
                </MindMap>
            </div>
        </div>
    </>)
}