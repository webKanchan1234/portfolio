import React, { useEffect } from 'react'
import "./skill.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useDispatch, useSelector } from "react-redux"
import { allSkills } from '../../actions/skillsAction';

const Skills = () => {
  const dispatch = useDispatch()
  const { loading, skills, error } = useSelector(state => state.skills)

  useEffect(() => {
    dispatch(allSkills())
  }, [])

  return (
    <div id='skills1'>
      <h2 id='center'>Skills</h2>
      <div className="skills-container">
        {
          skills && [...skills].reverse().map((data, idx) => {
            return (
              <div className="skill-bar">
                <span style={{color:"white"}}>{data.name}</span>
                <ProgressBar now={data.percentage} label={`${data.percentage}%`} />
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Skills