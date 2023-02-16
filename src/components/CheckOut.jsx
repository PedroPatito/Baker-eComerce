import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CrearOrden } from "../queries/products";
import Brief from "./brief";
import "../products.css";
import { useLocalStorage } from "./LocalStorage";

const CheckOut = () => {
  let productos = [];
  let productoParseado;
  let total = [];
  let totalCompra;
  const [nombre,setNombre] = useState(" ")
  const [mail,setMail] = useState(" ")
  const [telefono,setTelefono] = useState(" ")





  for (let i = 0, len = localStorage.length; i < len; ++i) {
    productos[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    productoParseado = productos;
    total[i] = productos[i].precio;
  }


  totalCompra = (a, b) => a + b;
  totalCompra = total.reduce(totalCompra);



  const datosComprador = () => {
    const db = getFirestore();

    const order = {
      cliente: { nombre: nombre, email: mail, telefono: telefono },
      total: totalCompra,
    };

     CrearOrden(db, order)
  };

  const renderProductos = () => {
    return productoParseado?.map((item) => (
      <div className="productosCheckOut">
        <img className="imgCheckOut" src={item.foto} alt="foto" />
        <h3>{item.producto}</h3>
        <p>${item.precio}</p>
        <p>X{item.cantidad}</p>

        <Button
          onClick={() => {
            localStorage.removeItem(item.id);
            window.location.reload(true);
          }}
        >
          X
        </Button>
      </div>
    ));
  };

  return (
    <div className="checkOutConForm">
      {renderProductos()}
      <p>total ${totalCompra}</p>

      <Form className="formCheckOut"  >
        <Form.Group className="mb-3" controlId="nombre" onChange={event => setNombre(event.target.value)}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            className="inputForm"
            type="text"
            placeholder="Juan Carlos Perez"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email" onChange={event => setMail(event.target.value)}>
          <Form.Label>Email </Form.Label>
          <Form.Control 
            className="inputForm"
            type="email"
            placeholder="pepe123@gmail.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefono" onChange={event => setTelefono(event.target.value)}>
          <Form.Label>Telefono</Form.Label>
          <Form.Control 
            className="inputForm"
            type="telephone"
            placeholder="+54 9 294-4857234"
          />
        </Form.Group>
        <Button
          className="buttonCheckOut"
          onClick={() => {
            datosComprador()
          }}
        >
          Finalizar compra
        </Button>
      </Form>
    </div>
  );
};

export default CheckOut;


