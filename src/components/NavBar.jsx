import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"
import React from 'react'
import brand from "../img/brand.png"
import "../NavBarStyle.css"
import { Link } from 'react-router-dom';
import { BrowserRouter} from "react-router-dom";

export default function navBar() {
  return (
    <div >
      
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/"><img src={brand} alt="" /></Link>
          <Nav className="me-auto">
          <ul>
            <li>
            <Link  to={"/herramientas"}>herramientas</Link>
          </li>
          <li>
            <Link to={"/moldes"}>moldes</Link>
          </li>
          <li>
            <Link to={"/maquinaria"}>maquinaria</Link>
          </li>
          <li>
            <Link to={"/insumos"}>insumos</Link>
          </li>
          </ul>

          </Nav>
          <CartWidget />
         </Container>
        
       </Navbar>
    
    </div>
  )
}
