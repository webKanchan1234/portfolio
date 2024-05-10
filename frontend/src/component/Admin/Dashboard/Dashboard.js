import React, { useEffect } from 'react'
import "./dashboard.css"
import Sidebar from '../Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { allProjects } from '../../../actions/projectAction'
import { allSkills } from '../../../actions/skillsAction'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { projects } = useSelector(state => state.projects)
  const { loading, skills, error } = useSelector(state => state.skills)

  // console.log(projects)
  useEffect(() => {
    dispatch(allProjects())
    dispatch(allSkills())
  }, [])
  return (
    <div className='dashboard-container'>
      <div className="sidebar">
        <div className="overlay-content">
          <Sidebar />
        </div>
      </div>
      <div className="dashboard-right details">
        <div className="dashboard-box">
          <h3>Projects</h3>
          <span>{projects.length}</span>
        </div>
        <div className="dashboard-box1">
          <h3>Projects</h3>
          <span>{skills.length}</span>
        </div>
        <div className="dashboard-box2">
          <h3>Projects</h3>
          <span>{skills.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard