import React, { useEffect, useState } from 'react'
import "./projects.css"
import Sidebar from '../Sidebar/Sidebar'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { allProjects, deleteProject } from '../../../actions/projectAction'
import { useAlert } from 'react-alert'
import AdminHeader from '../AdminHeader/AdminHeader';

const Projects = () => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const { projects } = useSelector(state => state.projects)
  const [refresh, setRefresh] = useState(false);
  // console.log(projects)

  const handleProjectDelete = (id) => {
    console.log(id)
    dispatch(deleteProject(id)).then(() => {
      alert.success("Project deleted successfully");
      setRefresh(prev => !prev); // Toggle refresh state to re-fetch skills
    })
      .catch((error) => {
        alert.error("Failed to delete Project");
        console.error("Delete Project error: ", error);
      });

  }
  useEffect(() => {
    dispatch(allProjects())
  }, [refresh])
  return (
    <>
      <AdminHeader />
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
                      <td>{idx + 1}</td>
                      <td>{data.title}</td>
                      <td>{data.description}</td>
                      <td>{data.github}</td>
                      <td>{data.url}</td>
                      <td>
                        <tr>
                          <td ><EditIcon className='action-cell' style={{ marginRight: "0 2vmax" }} /></td>
                          <td ><DeleteIcon className='action-cell' style={{ marginRight: "0 2vmax", color: "red" }} onClick={() => { handleProjectDelete(data._id) }} /></td>
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
    </>
  )
}

export default Projects