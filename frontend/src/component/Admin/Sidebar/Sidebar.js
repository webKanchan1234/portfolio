import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom"
import "./sidebar.css"
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {

  const logout = ()=>{
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("role")
    window.location.href = "/"
  }
  
  return (
    <>
    {/* <MenuIcon className='menu' /> */}
      <Accordion  >
        <Accordion.Item eventKey="0" className='item'>
          <Accordion.Header className="custom-accordion">Skills</Accordion.Header>
          <Accordion.Body>
            <div className="skill-link"><Link id="skill-link" to="/admin/add-skill" >Add Skills</Link></div>
            <div className="skill-link"><Link id="skill-link" to="/admin/skills">All Skills</Link></div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className='item'>
          <Accordion.Header className="custom-accordion">Projects</Accordion.Header>
          <Accordion.Body>
            <div className="skill-link"><Link id="skill-link" to="/admin/add-project" onClick={(e) => e.stopPropagation()}>Add Projects</Link></div>
            <div className="skill-link"><Link id="skill-link" to="/admin/projects" onClick={(e) => e.stopPropagation()}>All Projects</Link></div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className='item'>
          <Accordion.Header className="custom-accordion">Messages</Accordion.Header>
          <Accordion.Body>
            <div className="skill-link"><Link id="skill-link" to="/admin/messages">All Messages</Link></div>
          </Accordion.Body>
        </Accordion.Item>
        <h3 id='logout' onClick={logout}>Logout</h3>
      </Accordion>
    </>
  );
}

export default Sidebar;