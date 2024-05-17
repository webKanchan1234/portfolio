import React from 'react'
import "./adminheader.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const AdminHeader = () => {
    const logout = ()=>{
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("role")
        window.location.href = "/"
      }
    return (
        <div className='admin-header'>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand href="/admin/dashboard" className='nav-color brand'>Admin Dasboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className='nav-color'>Home</Nav.Link>
                        </Nav>
                        
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href='/admin/profile' className='nav-color'>Profile</Nav.Link>
                        </Nav>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href='/admin/profile' className='nav-color'>Change Password</Nav.Link>
                        </Nav>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={logout} className='nav-color'>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AdminHeader