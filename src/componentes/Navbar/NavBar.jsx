import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from '../CardWidget/CardWidget';


const NavBar = () => {
   return (
      <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">INICIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">¿Por qué elegirnos?</Nav.Link>
              <Nav.Link href="#pricing">Ubicación</Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Abrigos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Remeras
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Sale
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
               
              <Nav.Link href="#deets">Comprar</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                1
              </Nav.Link>
             1 <CardWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default NavBar