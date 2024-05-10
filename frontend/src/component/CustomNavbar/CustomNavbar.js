import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomNavbar() {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark">
      <Container >
        <Navbar.Brand href="#" className='nav-color brand'>Kanchan Kumar</Navbar.Brand>
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
            <Nav.Link href="#home1" className='nav-color'>Home</Nav.Link>
            <Nav.Link href="#about1" className='nav-color'>About</Nav.Link>
            <Nav.Link href="#skills1" className='nav-color'>Skills</Nav.Link>
            <Nav.Link href="#project1" className='nav-color'>Projects</Nav.Link>
            <Nav.Link href="#contact1" className='nav-color'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;