import React from "react"
import Group from "../groups/groups";
import Students from "../students/student";
import Teachers from "../teachers/teachers";
import classes from "./content.module.css"

const Content = ({index})=>{
    return(
        <>
        {index === 1 && <Teachers/>}
        {index === 2 && <Students/>}
        {index === 3 && <Group/>}
        </>
    )
}
export default Content;