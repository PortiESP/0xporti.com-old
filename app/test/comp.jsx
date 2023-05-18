'use client'

import sass from "./comp.module.scss"
import sass2 from "./components.module.scss"
import { useEffect, useState } from "react"

export default function MindMap(props){

    const [hide, setHide] = useState(false)
    const [viewbox, setViewbox] = useState([0, 0, props.width, props.height])
    const [mouseCoords, setMouseCoords] = useState([0, 0])
    const [isHover, setIsHover] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const [zoom, setZoom] = useState(1)
    const baseInc = 0.9

    const wheelEvent = e => {
        const isMax = () => (viewbox[2]+baseInc > props.width) || (viewbox[3]+baseInc > props.height)

        const inc = e.deltaY < 0 ? baseInc: 1/baseInc  // Handle zoom in/out
        const diffW = viewbox[2] - viewbox[2]*inc  // Handle increment
        const diffH = viewbox[3] - viewbox[3]*inc  // Handle increment
        if (e.deltaY < 0 || !isMax() && !isPressed) setViewbox(old => [old[0]+diffW/2, old[1]+diffH/2, old[2]-diffW, old[3]-diffH])
        setZoom(viewbox[2]/props.width)

    }


    const moveEvent = e => {
        if (isPressed){
            let deltaX;
            let deltaY;

            if (!mouseCoords[0] && !mouseCoords[1]) {
                setMouseCoords([e.clientX, e.clientY])  // Initial state
                deltaX = 0
                deltaY = 0
            }
            else {
                deltaX = (mouseCoords[0] - e.clientX) * (zoom*0.75)
                deltaY = (mouseCoords[1] - e.clientY) * (zoom*0.75)
            }

            console.log(viewbox, deltaX, deltaY, zoom)  // DEBUG

            setViewbox([viewbox[0]+deltaX, viewbox[1]+deltaY, viewbox[2], viewbox[3]])  // Move viewbox
            setMouseCoords([e.clientX, e.clientY])  // Update coords
        } 
    }


    useEffect(()=>{
        document.body.style.overflow = (isHover ? "hidden" : "visible")
    }, [isHover])



    return (<div className={sass.div__wrap} 
                onWheel={wheelEvent} 
                onMouseEnter={()=>setIsHover(true)} 
                onMouseLeave={()=>{setIsHover(false); setIsPressed(false)}}
                onMouseDown={()=>{setIsPressed(true); setMouseCoords([0,0])}}
                onMouseUp={()=>setIsPressed(false)}
                onMouseMove={moveEvent}
            >
        {/* Image */}
        <div className={sass.div__image}>
            <svg viewBox={viewbox.join(" ")} fill="none" xmlns="http://www.w3.org/2000/svg">
                {props.children}
            </svg>
        </div>
        {/* Menu */}
        <div className={sass.div__menu}>
            {/* Menu header */}
            <div className={[sass.div__menu_header, hide&&sass.status__hide].join(" ")} onClick={()=>setHide(old => !old)}>
                <span className={sass.span__header_title}>Menu</span>
                <span className={sass.span__header_icon}></span>
            </div>
            {/* Menu items */}
            <div className={[sass.div__menu_body, hide&&sass.state__hide].join(" ")}>
                <hr/>
                
                <Toggle label="test" ids={["Ellipse1",]} initial={true}/>
                <Toggle label="test" ids={["Ellipse2",]}/>
                <Chamber label="Multiple" idsGroups={[{label:"rect1", ids:["rect1"]}, {label:"rect2", ids:["rect2"]}, {label:"rect3", ids:["rect3"]}, {label:"rect4", ids:["rect4"]}, {label:"rect5", ids:["rect5"]}, {label:"rect6", ids:["rect6"]}]}/>
            </div>
        </div>
        {/* Zoom label */}
        <span className={sass.span__zoom} onClick={()=>{setZoom(1); setViewbox([0, 0, props.width, props.height])}}>
            {Math.round((1/zoom)*100)}%
        </span>
    </div>)
}



function setIds(IDslist, state){
    IDslist.map(id => document.getElementById(id).style.visibility = state ? "visible" : "hidden")
}



// PROPS {label="", ids[""], initial=false}
function Toggle(props){
    
    const [state, setState] = useState(props.initial || false)

    useEffect(()=>{
        console.log("Setting: ", props.ids, " to ", state)
        setIds(props.ids, state)
    }, [state])

    return (<div className={[sass2.div__button_wrap, state ? sass2.state__on : sass2.state__off].join(" ")} title={props.label} onClick={()=>setState(old=>!old)}>
        <div className={sass2.div__button_label}>{props.label}</div>
        <div className={sass2.div__button_toggle}>{state ? "ON" : "OFF"}</div>
    </div>)
}

// PROPS {label="", idsGroups[{label:"", ids:[""]}], initial=false}
function Chamber(props){
    
    const [selected, setSelected] = useState(0)
    const [state, setState] = useState(props.initial || false)
    
    // Selected listener
    useEffect(()=>{
        console.log("Setting selected to ", props.idsGroups[selected])

        // Hide unselected
        props.idsGroups.map( group => setIds(group.ids, false) ) 
        // Show selected
        setIds(props.idsGroups[selected].ids, true)
        setState(true)

    }, [selected])

    // State listener
    useEffect(()=>{
        console.log("Setting: ", selected, " to ", state)
        setIds(props.idsGroups[selected].ids, state)
    }, [state])

    
    // Initial settings
    useEffect(()=> setState(false), [])



    return (<div className={[sass2.div__chamber_wrap, state ? sass2.state__on : sass2.state__off].join(" ")} title={props.label}>
        <div className={sass2.div__chamber_label} onClick={()=>setState(old=>!old)}>{props.label}</div>
        <div className={sass2.div__chamber_toggle} onClick={()=>setState(old=>!old)}>{state ? "ON" : "OFF"}</div>
        <select className={sass2.select__chamber_selector} onChange={e=>setSelected(e.target.value)}>
            {
                props.idsGroups.map( (option,i) => <option key={i} value={i}>{option.label}</option>)
            }
        </select>
    </div>)
}