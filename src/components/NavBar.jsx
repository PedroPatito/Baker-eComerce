import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"
import React from 'react'
import brand from "../img/brand.png"
import "../NavBarStyle.css"

export default function navBar() {
  return (
    <div >
      
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
         <img src={brand} alt="" />
          <Nav className="me-auto">
            <Nav.Link href="#home">herramientas</Nav.Link>
            <Nav.Link href="#features">moldes</Nav.Link>
            <Nav.Link href="#features">maquinaria</Nav.Link>
            <Nav.Link href="#pricing">insumos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
        
      </Navbar>
    
    </div>
  )
}
