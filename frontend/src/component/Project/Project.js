import React, { useEffect } from 'react'
import "./project.css"
import CustomCard from './CustomCard'
import {useDispatch,useSelector} from "react-redux"
import { allProjects } from '../../actions/projectAction'

const Project = () => {
    const dispatch = useDispatch()
    const {projects} = useSelector(state => state.projects)

    // console.log(projects)
    useEffect(() => {
      dispatch(allProjects())
    }, [])
    
    return (
        <div id='project1'>
            <h3 id='center'>Projects</h3>
            <div className="project-container">
                {
                    projects && [...projects].reverse().map((data,idx)=>{
                        return(
                            <CustomCard props={data}/>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Project