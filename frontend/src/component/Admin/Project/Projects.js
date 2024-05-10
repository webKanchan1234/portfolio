import React, { useEffect } from 'react'
import "./projects.css"
import Sidebar from '../Sidebar/Sidebar'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { allProjects } from '../../../actions/projectAction'

const Projects = () => {
  const dispatch = useDispatch()
    const {projects} = useSelector(state => state.projects)

    // console.log(projects)
    useEffect(() => {
      dispatch(allProjects())
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
              <th>Title</th>
              <th>Description</th>
              <th>GitHub</th>
              <th>Url</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              projects && projects.map((data, idx) => {
                return (
                  <tr>
                    <td>{idx+1}</td>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td>{data.github}</td>
                    <td>{data.url}</td>
                    <td>
                      <tr>
                        <td ><EditIcon className='action-cell' style={{ marginRight: "0 2vmax" }} /></td>
                        <td ><DeleteIcon className='action-cell' style={{ marginRight: "0 2vmax", color: "red" }} /></td>
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

export default Projects