import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Valorant Israel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
          </Nav>
          <Nav>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <NavLink className="nav__dropdown" to="login">
                  Login
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav__dropdown" to="register">
                  Register
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
