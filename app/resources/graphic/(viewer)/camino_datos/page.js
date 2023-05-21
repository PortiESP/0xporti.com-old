import MindMap from "@/components/MarkupWidgets/tags/MindMap"
import sass from "./page.module.scss"
import dynamic from "next/dynamic"


const SVGIMG = dynamic(()=>import("./svg.jsx"))

const controls = [
    {
        type: "chamber",
        label: "Vista",
        title: "Selecciona la vista que se va a motrar",
        initial: true,
        idsGroups: [
            // OPTION 0 - INTRODUCCION
            {
                label: "Introduccion",
                ids: ["vista_intro"]
            },
            // OPTION 1 - EJEMPLO TIPO R
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
                                ids: ["R_paso1_anotaciones", "R_paso1_guias"]
                            },
                            {
                                label: "Paso 2",
                                ids: ["R_paso2_anotaciones", "R_paso2_guias"]
                            },
                            {
                                label: "Paso 3",
                                ids: ["R_paso3_anotaciones", "R_paso3_guias"]
                            },
                            {
                                label: "Paso 4",
                                ids: ["R_paso4_anotaciones", "R_paso4_guias"]
                            },
                            {
                                label: "Paso 5",
                                ids: ["R_paso5_anotaciones", "R_paso5_guias"]
                            },
                        ]
                    },
                    {
                        type: "toggle",
                        label: "Anotaciones",
                        title: "Show/Hide the informative boxes",
                        ids: ["R_anotaciones"],
                        initial: true,
                    },
                ]
            },
            // OPTION 2 - EJEMPLO TIPO I
            {
                label: "Ejemplo tipo I",
                ids: ["vista_ejm_I"],
                controls: [
                    {
                        type: "chamber",
                        label: "Pasos",
                        title: "Selecciona el paso del camino de datos que quieres mostrar",
                        initial: true,
                        idsGroups: [
                            {
                                label: "Paso 1",
                                ids: ["I_paso1_anotaciones", "I_paso1_guias"]
                            },
                            {
                                label: "Paso 2",
                                ids: ["I_paso2_anotaciones", "I_paso2_guias"]
                            },
                            {
                                label: "Paso 3",
                                ids: ["I_paso3_anotaciones", "I_paso3_guias"]
                            },
                            {
                                label: "Paso 4",
                                ids: ["I_paso4_anotaciones", "I_paso4_guias"]
                            },
                            {
                                label: "Paso 5",
                                ids: ["I_paso5_anotaciones", "I_paso5_guias"]
                            },
                        ]
                    },
                    {
                        type: "toggle",
                        label: "Anotaciones",
                        title: "Show/Hide the informative boxes",
                        ids: ["I_anotaciones"],
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
                    <SVGIMG />
                </MindMap>
            </div>
        </div>
    </>)
}