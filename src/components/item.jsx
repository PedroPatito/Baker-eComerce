import React from "react";
import { useEffect, useState } from "react";
// import { getFirestore } from 'firebase/firestore';
import { getAllProducts } from "../queries/products";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../products.css";

export default function Productos(db) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts(db).then((item) => {
      setProducts(item);
    });
  }, []);
  return products?.map((item) => (
    <div className="product" key={item.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="img_card" variant="top" src={item.foto} />
        <Card.Body>
          <Card.Title>{item.producto}</Card.Title>
          <Card.Text>{item.precio}</Card.Text>
          <Link to={`/product/${item.id}`}>
            {" "}
            <Button variant="primary" className="button">
              ver detalle
            </Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </div>
  ));
}
