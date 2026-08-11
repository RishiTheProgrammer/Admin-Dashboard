import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSpeedometer2 } from "react-icons/bs";
import { TbCircleLetterRFilled } from "react-icons/tb";
import { Link } from "react-scroll"
import Offcanvas from 'react-bootstrap/Offcanvas';

const navbar = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary m-2 rounded-2 px-2 py-2">
          <Container fluid>
            <Navbar.Brand href="#" className='d-flex align-items-center gap-1'>
              <BsSpeedometer2 className="me-2" /> Admin Dashboard
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="mx-auto d-flex align-items-center gap-4">
                    <Link to="home">Home</Link>
                    <Link to="analytics">Analytics</Link>
                    <Link to="messages">Messages</Link>
                    <Link to="settings">Settings</Link>
                    <Link to="profile">Profile</Link>
                </Nav>
                  <NavDropdown
                    title={<TbCircleLetterRFilled size={30}/>}
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default navbar;