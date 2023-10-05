import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget';



const NavBar = () => {
   return (
      <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
        <Link to="/" className="navbar-brand">
            <img src="https://i.ibb.co/TgJyqNW/logo.png" alt="Logo" width="30"
        height="30" className="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/categoria/calzado'className="nav-link" >Calzado</NavLink>
              <NavLink to='/categoria/indumentaria'className="nav-link" >Indumentaria</NavLink>
              
            </Nav>
            <Nav>
               <Link to='/contador'>
              
               <CardWidget />
              
               </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default NavBar