import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../App.css';

class NavBar extends React.Component{
  render(){

    return(
      <Navbar className='navbar p-2' expand="lg" sticky="right" id="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={window.location.pathname === '/' ? 'selected' : ''} href={"/"}>Página Inicial</Nav.Link>
              <Nav.Link className={window.location.pathname === '/classes' ? 'selected' : ''} href={"/classes"}>Aulas</Nav.Link>
              <Nav.Link className={window.location.pathname === '/plans&prices' ? 'selected' : ''} href={"/plans&prices"}>Planos e preços</Nav.Link>
              <Nav.Link className={['/contacts/1', '/contacts/2', '/contacts/3'].includes(window.location.pathname)  ? 'selected' : ''} href={"/contacts/1"}>Contactos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )  
  }
}

export default NavBar;