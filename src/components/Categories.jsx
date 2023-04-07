import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetProductsByCategory } from "../queries/products";
import "../products.css";

const RenderCategorias = () => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const db = getFirestore();
    GetProductsByCategory(db, name).then((item) => {
      setProducts(item);
    });
  }, [name]);

  return products?.map((item) => (
    <div className="categories">
      <div className="product" key={item.id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img_card" variant="top" src={item.foto} />
          <Card.Body>
            <Card.Title>{item.producto}</Card.Title>
            <Card.Text>$ {item.precio}</Card.Text>
            <Link to={`/product/${item.id}`}>
              {" "}
              <button className="button">
                ver detalle
              </button>{" "}
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  ));
};

export default RenderCategorias;

export const Categorias = ["herramientas", "insumos", "maquinaria", "moldes"];
