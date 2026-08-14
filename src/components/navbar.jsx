import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { TbHexagonLetterRFilled } from "react-icons/tb";
import { TbCircleLetterRFilled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './navbar.css'
import Offcanvas from 'react-bootstrap/Offcanvas';

const navbar = ({theme, setTheme}) => {
  const navClass = ({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link');
  const user = {
    name: "Rishi",
    role: "Admin",
    icon: <TbCircleLetterRFilled size={30} />
  };
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary m-2 rounded-2 px-2 py-2 navbar" fixed="top">
          <Container fluid>
            <Navbar.Brand href="https://rishitheprogrammer.vercel.app" className='d-flex align-items-center gap-1'>
              <TbHexagonLetterRFilled size={30} className='me-2'/> Rishi
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
                <Nav className="mx-lg-auto mx-0 d-lg-flex align-items-center gap-4">
                    <NavLink to="/" end className={navClass}>Home</NavLink>
                    <NavLink to="/analytics" className={navClass}>Analytics</NavLink>
                    <NavLink to="/messages" className={navClass}>Messages</NavLink>
                    <NavLink to="/settings" className={navClass}>Settings</NavLink>
                    <NavLink to="/profile" className={navClass}>Profile</NavLink>
                </Nav>
                  <div className="d-flex gap-2 mx-auto m-lg-0 w-auto">
                    <NavDropdown title={user.icon} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.2">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Settings
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={toggleTheme}>
                        Theme: {theme === 'dark' ? 'Dark' : 'Light'}
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink to="/messages" className='nav-link'><FaBell size={30}/></NavLink>
                  </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default navbar;