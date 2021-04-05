import React from "react"
import Teachers from "../teachers/teachers";
import classes from "./content.module.css"

const Content = ({index})=>{
    return(
        <>
        {index === 1 && <Teachers/>}
        </>
    )
}
export default Content;