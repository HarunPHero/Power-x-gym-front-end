import Container from "react-bootstrap/Container";
import './Header.css'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
        <Container>
          <h2 className="text-light font-bold text-3xl">
            Power <span className="text-accent">X</span>
          </h2>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="space-x-4 ... font-bold font-mono text-center">
              <Nav.Link> 
                {/* this is a empty nav link */}
              </Nav.Link>
              <Nav.Link href="/" className="text-light nav-child">
                Home
              </Nav.Link>
             
              <Nav.Link href="/classes" className="text-light nav-child">
                Our Classes
              </Nav.Link>
              <Nav.Link href="/about" className="text-light nav-child">
                About us
              </Nav.Link>
             
              <Nav.Link href="/pricing" className="text-light nav-child">
                Pricing
              </Nav.Link>
              <Nav.Link href="#features" className="text-light nav-child">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
