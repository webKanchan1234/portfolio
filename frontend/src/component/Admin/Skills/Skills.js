import React, { useEffect, useState } from 'react'
import "./skills.css"
import Sidebar from '../Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { allSkills, deleteSkill } from '../../../actions/skillsAction';
// import { useAlert } from 'react-alert'
import AdminHeader from '../AdminHeader/AdminHeader';

const Skills = () => {
  // const alert = useAlert()
  const dispatch = useDispatch()
  const { loading, skills, error } = useSelector(state => state.skills)
  const { success } = useSelector(state => state.deleteSkill)
  const [refresh, setRefresh] = useState(false);


  const handleDeleteSkill = (id) => {
    dispatch(deleteSkill(id))
      .then(() => {
        // alert.success("Skill deleted successfully");
        setRefresh(prev => !prev); // Toggle refresh state to re-fetch skills
      })
      .catch((error) => {
        // alert.error("Failed to delete skill");
        console.error("Delete skill error: ", error);
      });
  }

  useEffect(() => {
    dispatch(allSkills());
  }, [refresh]);

  console.log(skills)

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
                          <td ><DeleteIcon className='action-cell' style={{ marginRight: "0 1vmax", color: "red" }} onClick={() => handleDeleteSkill(data._id)} /></td>
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

export default Skills