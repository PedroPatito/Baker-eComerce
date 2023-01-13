import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import React from "react";
import brand from "../img/brand.png";
import "../NavBarStyle.css";
import { Link } from "react-router-dom";
import { Categorias } from "./Categories";
import "../NavBarStyle.css";

export default function navBar() {
  return (
    <div className="navBar">
      <Navbar variant="light">
        <Container>
          <Link to="/">
            <img src={brand} alt="" />
          </Link>
          <Nav className="me-auto">
            <ul>
              {Categorias.map((name) => (
                <Link to={`/category/${name}`} className="linkNavBar">
                  <li className="navBarLinks">{name}</li>
                </Link>
              ))}
            </ul>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
}
