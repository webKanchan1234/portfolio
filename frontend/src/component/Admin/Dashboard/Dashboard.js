import React, { useEffect } from 'react'
import "./dashboard.css"
import Sidebar from '../Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { allProjects } from '../../../actions/projectAction'
import { allSkills } from '../../../actions/skillsAction'
import AdminHeader from '../AdminHeader/AdminHeader'
import Table from 'react-bootstrap/Table';
import { allUsers } from '../../../actions/userAction'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Dashboard = () => {
  const dispatch = useDispatch()
  const { projects } = useSelector(state => state.projects)
  const { loading, skills, error } = useSelector(state => state.skills)
  const { users } = useSelector(state => state.users)
  const user = users[0]
  console.log(user)

  // console.log(projects)
  useEffect(() => {
    dispatch(allProjects())
    dispatch(allSkills())
    dispatch(allUsers())
  }, [dispatch])
  return (
    <>
      <AdminHeader />
      <div className='dashboard-container'>
        <div className="sidebar">
          <div className="overlay-content">
            <Sidebar />
          </div>
        </div>
        <div className="dashboard-right details">
          <div className="dashboard-right-top">
            <div className="dashboard-box">
              <h3>Projects</h3>
              <span>{projects?.length}</span>
            </div>
            <div className="dashboard-box1">
              <h3>Skills</h3>
              <span>{skills?.length}</span>
            </div>
            <div className="dashboard-box2">
              <h3>Messages</h3>
              <span>{skills?.length}</span>
            </div>
          </div>
          <div className="profile">
            <div className="profile-image">
              <div className='image'>
                <img src={user?.image} alt='image' /> <span id='avatar-edit'><EditIcon/></span>
                <p>{user?.description}</p>
              </div>
              <Table >
                <tbody>
                  <tr>
                    <td><LanguageIcon/>Portfolio</td>
                    <td><Link id="" target="_blank" to={user?.portfolio}>{user?.portfolio}</Link> </td>
                  </tr>
                  <tr>
                    <td><GitHubIcon/>GitHub</td>
                    <td><Link id="" target="_blank" to={user?.github}>{user?.github}</Link> </td>
                  </tr>
                  <tr>
                    <td><LinkedInIcon/>LinkedIn</td>
                    <td><Link id="" target="_blank" to={user?.linkedin}>{user?.linkedin}</Link> </td>
                  </tr>
                  <tr>
                    <td><CodeIcon/>Leetcode</td>
                    <td><Link id="" target="_blank" to={user?.leetcode}>{user?.leetcode}</Link> </td>
                  </tr>
                  <tr>
                    <td><InstagramIcon/>Instagram</td>
                    <td><Link id="" target="_blank" to={user?.instagram}>{user?.instagram}</Link> </td>
                  </tr>
                  <tr>
                    <td><FacebookIcon/>Facebook</td>
                    <td><Link id="" target="_blank" to={user?.facebook}>{user?.facebook}</Link> </td>
                  </tr>

                </tbody>
              </Table>
            </div>
            <div className="profile-details">
              <Table style={{ backgroundColor: "red" }}>
                <tbody>
                  <tr>
                    <td>Full Name</td>
                    <td>{user?.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{user?.email}</td>
                  </tr>
                  <tr>
                    <td>Mobile</td>
                    <td>{user?.mobile}</td>
                  </tr>
                  <tr>
                    <td>Profile</td>
                    <td>{user?.profile}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{user?.description}</td>
                  </tr>
                  <tr>
                    <td>Experience</td>
                    <td>{user?.experience} years</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{user?.address}</td>
                  </tr>
                  <tr>
                    <td><span id='profile-edit'>Edit</span></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard