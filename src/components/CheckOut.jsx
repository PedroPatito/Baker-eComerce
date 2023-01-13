import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CrearOrden } from "../queries/products";
import "../products.css";
const CheckOut = () => {
  let productos = [];
  let productoParseado;
  let total = [];
  let totalCompra;
  // const [nombre,setNombre] = useState(" ")
  // const [mail,setMail] = useState(" ")
  // const [telefono,setTelefono] = useState(" ")

  for (let i = 0, len = localStorage.length; i < len; ++i) {
    productos[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    productoParseado = productos;
    total[i] = productos[i].precio;
  }


  totalCompra = (a, b) => a + b;
  totalCompra = total.reduce(totalCompra);



  useEffect(() => {
    const db = getFirestore();

    const order = {
      cliente: { nombre: "register", email: "mail", telefono: "telefono" },
      total: totalCompra,
    };

    CrearOrden(db, order).then((order) => {
    });
  }, []);

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

      <Form className="formCheckOut">
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            className="inputForm"
            type="email"
            placeholder="Juan Carlos Perez"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email </Form.Label>
          <Form.Control
            className="inputForm"
            type="email"
            placeholder="pepe123@gmail.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            className="inputForm"
            type="password"
            placeholder="+54 9 294-4857234"
          />
        </Form.Group>
        <Button
          type="submit"
          className="buttonCheckOut"
          onClick={() => {
            CrearOrden();
          }}
        >
          Finalizar compra
        </Button>
      </Form>
    </div>
  );
};

export default CheckOut;


