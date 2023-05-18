import MindMap from "./comp";
import sass from "./page.module.scss"

export default function Page(){
    return (<>
        <div className={sass.div__wrap_frame}>
            <div className={sass.div__frame}>
                <MindMap width={892} height={562}>
                    <rect width="892" height="562" fill="#F5F5F5"/>
                    <g id="Frame 48">
                    <rect width="892" height="562" fill="black"/>
                    <circle id="Ellipse1" cx="253" cy="281" r="104" fill="#FF1C1C"/>
                    <circle id="Ellipse2" cx="598" cy="281" r="104" fill="#0029FF"/>
                    <rect id="rect1" x="108" y="457" width="59" height="59" rx="3" fill="#FF0000"/>
                    <path id="rect3" d="M295 461C295 459.343 296.343 458 298 458H351C352.657 458 354 459.343 354 461V514C354 515.657 352.657 517 351 517H298C296.343 517 295 515.657 295 514V461Z" fill="#00FF0A"/>
                    <path id="rect5" d="M494 461C494 459.343 495.343 458 497 458H550C551.657 458 553 459.343 553 461V514C553 515.657 551.657 517 550 517H497C495.343 517 494 515.657 494 514V461Z" fill="#AD00FF"/>
                    <rect id="rect2" x="203" y="458" width="59" height="59" rx="3" fill="#FFF500"/>
                    <rect id="rect4" x="390" y="458" width="59" height="59" rx="3" fill="#00F0FF"/>
                    <rect id="rect6" x="589" y="458" width="59" height="59" rx="3" fill="#FF00E6"/>
                    </g>
                </MindMap>
            </div>
        </div>
    </>)
}