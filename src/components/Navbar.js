import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../App.css';

import {MdOutlineLogout} from "react-icons/md"

class NavBar extends React.Component{
  render(){

    return(
      <Navbar className='navbar' expand="lg" sticky="right" id="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={window.location.pathname === '/' ? 'selected' : ''} href={"/"}>Página Inicial</Nav.Link>
              <Nav.Link className={window.location.pathname === '/classes' ? 'selected' : ''} href={"/classes"}>Aulas</Nav.Link>
              <Nav.Link className={window.location.pathname === '/plans&prices' ? 'selected' : ''} href={"/plans&prices"}>Planos e preços</Nav.Link>
              <Nav.Link className={window.location.pathname === '/contacts' ? 'selected' : ''} href={"/contacts"}>Contactos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )  
  }
}

export default NavBar;