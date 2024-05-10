import React, { useEffect } from 'react'
import "./skills.css"
import Sidebar from '../Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { allSkills } from '../../../actions/skillsAction';

const Skills = () => {
  const dispatch = useDispatch()
  const { loading, skills, error } = useSelector(state => state.skills)

  useEffect(() => {
    dispatch(allSkills())
  }, [])

  return (
    <div className='dashboard-container'>
      <div className="sidebar">
        <div className="overlay-content">
          <Sidebar />
        </div>
      </div>
      <div className="dashboard-right">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Skills</th>
              <th>Percentage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              skills && skills.map((data, idx) => {
                return (
                  <tr>
                    <td>{data._id}</td>
                    <td>{data.name}</td>
                    <td>{data.percentage}</td>
                    <td>
                      <tr>
                        <td ><EditIcon className='action-cell' style={{ marginRight: "0 1vmax" }} /></td>
                        <td ><DeleteIcon className='action-cell' style={{ marginRight: "0 1vmax", color: "red" }} /></td>
                      </tr>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Skills