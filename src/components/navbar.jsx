import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSpeedometer2 } from "react-icons/bs";
import { TbCircleLetterRFilled } from "react-icons/tb";
import { Link } from "react-scroll"

const navbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary m-lg-2 rounded-3">
      <Container>
        <Navbar.Brand href="#home" className='d-flex align-items-center gap-2 m-0'><BsSpeedometer2/> Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Link to="home">Home</Link>
            <Link to="analytics">Analytics</Link>
            <Link to="messages">Messages</Link>
            <Link to="settings">Settings</Link>
            <Link to="profile">Profile</Link>
          </Nav>
                <NavDropdown title={<TbCircleLetterRFilled size={30} color="#fde7c9"/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;