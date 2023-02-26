import Image from "next/image"
import sass from "./styles/Skills.module.scss"
// API
import {skillsData} from "@/api/landing/skills"




function SkillCard(props){
    return (
        <div className={sass.div__skillCard}>
            <hr />
            <Image src={props.icon} alt="Skill icon" width={60} height={60}/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}


function SkillIcon(props){

    return (
        <div className={[sass.div__icon, props.invert && sass.invert].join(" ")} style={{...props.style, "--bright": props.bright, "--scale": props.scale}}>
            <Image src={props.src} fill alt="icon"/>
        </div>
    )
}


export default function Skills(){

    return (
        <>
        <h2 className={sass.h2__title}>My Skills 🧰</h2>
        <section className={sass.section__skills_wrap} id="section--skills-wrap">


            <div className={sass.div__skills}>
                {skillsData.map( skill => <SkillCard key={skill.id} {...skill} /> )}
            </div>

            <div className={sass.div__icons_groups}>

                <div className={sass.div__icons_group}>

                    <SkillIcon src="/assets/icons/javascript-original.svg" bright="140%"/>
                    <SkillIcon src="/assets/icons/python-original.svg"/>
                    <SkillIcon src="/assets/icons/c-original.svg" bright="130%"/>
                    <SkillIcon src="/assets/icons/linux-plain.svg" invert/>
                    <SkillIcon src="/assets/icons/git-plain.svg"/>
                    <SkillIcon src="/assets/icons/react-original.svg" />
                    <SkillIcon src="/assets/icons/nextjs-original.svg" invert/>
                    <SkillIcon src="/assets/icons/archlinux-icon.svg"/>
                    <SkillIcon src="/assets/icons/sass-original.svg" />
                    <SkillIcon src="/assets/icons/css3-plain.svg"/>
                    <SkillIcon src="/assets/icons/raspberrypi-original.svg" />
                    <SkillIcon src="/assets/icons/vscode-original.svg" />
                    <SkillIcon src="/assets/icons/redis-plain.svg"/>
                    <SkillIcon src="/assets/icons/github-original.svg" invert bright="100%"/>
                    <SkillIcon src="/assets/icons/bash-original.svg"/>
                    <SkillIcon src="/assets/icons/nodejs-plain.svg"/>
                    <SkillIcon src="/assets/icons/npm-original-wordmark.svg"/>
                    <SkillIcon src="/assets/icons/mysql-plain.svg"/>

                </div>
                
                <div className={sass.div__icons_group}>
                    <SkillIcon src="/assets/icons/debian-plain.svg"/>
                    <SkillIcon src="/assets/icons/docker-plain.svg"/>
                    <SkillIcon src="/assets/icons/figma-plain.svg" invert/>
                    <SkillIcon src="/assets/icons/firebase-plain.svg"/>
                    <SkillIcon src="/assets/icons/firefox-plain.svg"/>
                    <SkillIcon src="/assets/icons/googlecloud-original.svg"/>
                    <SkillIcon src="/assets/icons/html5-plain.svg"/>
                    <SkillIcon src="/assets/icons/illustrator-line.svg"/>
                    <SkillIcon src="/assets/icons/photoshop-line.svg"/>
                    <SkillIcon src="/assets/icons/matlab-plain.svg" invert/>
                    <SkillIcon src="/assets/icons/amazonwebservices-original.svg"/>
                    <SkillIcon src="/assets/icons/markdown-original.svg" invert/>
                    <SkillIcon src="/assets/icons/qt-original.svg"/>
                    <SkillIcon src="/assets/icons/opencv-original.svg"/>
                    <SkillIcon src="/assets/icons/burp-suite.png" bright="100%"/>
                    <SkillIcon src="/assets/icons/pandas-original.svg" invert bright="100%"/>
                    <SkillIcon src="/assets/icons/numpy-original.svg"/>
                    
                </div>
            </div>

        </section>
        </>

    )
}
