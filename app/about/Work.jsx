'use client'

import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
// Component

// Styles
import sass from "./styles/Work.module.scss"
import Image from "next/image"
// API Data
import {workCardsData} from "@/api/landing/work"
import Link from "next/link"


function WorkCard(props){
    
    const [bubble, setBubble] = useState([0, 0, false])
    const $bubble = useRef()



    function cardMouseEvent(e){

        
        let x = e.clientX - e.target.getBoundingClientRect().x 
        let y = e.clientY - e.target.getBoundingClientRect().y 
        
        x += (x - e.target.getBoundingClientRect().width/2) / 10
        y += (y - e.target.getBoundingClientRect().width/2) / 10
        

        

        setBubble([x, y])
    
    }

   
    return (
        <>
            <style jsx="true">{`

                .${sass.div__bubble}{
                    --circlePosX:${bubble[0]}px;
                    --circlePosY:${bubble[1]}px;
                    clip-path: circle(0 at var(--circlePosX) var(--circlePosY));
                }

            `}</style>


                <div className={sass.div__workCard} onMouseEnter={cardMouseEvent} onMouseLeave={cardMouseEvent}>
                    <Link href={props.clickUrl}>
                        
                        <div className={sass.div__image}>
                            <Image src={props.thumbnail} alt="" placeholder="blur" fill/>
                            <Image src={props.thumbnail} alt="" placeholder="blur" fill/>
                        </div>
                        <div className={sass.div__data}>
                            <h4>{props.title}</h4>
                            <p>{props.description}</p>
                            <span>{props.category}</span>
                            <div className={sass.div__bubble} ref={$bubble}></div>
                        </div>

                    </Link>
                </div>
        </>
    )
}


export default function Work(){    

    useEffect(()=>{
        function cardIntersected(elems){
            elems.map( e => (e.isIntersecting ? e.target.classList.add(sass.focus): e.target.classList.remove(sass.focus)) )
            // e.target.style.clipPath = e.isIntersecting ? "circle(300% at 367px 367px)": "circle(20px at 367px 367px)"
        }

        const observer = new IntersectionObserver(cardIntersected, {root: null, rootMargin: "-150px 0px", threshold: 1.0})
        if (window.innerWidth < 1100){
            Array(...document.querySelectorAll('.' + sass.div__data)).map(card => observer.observe(card))
        }


    }, [])
    
    return (
        <section className={sass.section__work} id="section--work" >
            <h3 className={sass.h__title}>My Projects 🚀</h3>
            <div className={sass.div__work_cards} >
                {workCardsData.map( card => <WorkCard key={card.id} {...card} />)}
            </div>
            
        </section>
    )
}