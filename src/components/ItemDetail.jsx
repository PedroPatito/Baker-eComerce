import { getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GetProductById } from '../queries/products';
import { useLocalStorage } from './LocalStorage';
import "../products.css"

 const ItemDetail = () => {


  const { id } = useParams();
  const [enCarrito, agregarCarrito] = useLocalStorage(id, " ")
  var [product, setProduct] = useState(null);
  useEffect(() => {
    const db = getFirestore();
    GetProductById(db, id)
      .then((item) => {

        setProduct(item)
      })   
  }, [id]);

  
  var e = 1
  var precioInicial = product?.precio
  return (
    <div className='itemDetail'>
      <h1>{product?.producto}</h1>
      <img alt='foto' src={product?.foto}/>
      <p>{product?.descripcion}</p>
      <p>${product?.precio}</p>
      <Button className='button' onClick={ () =>{
        
       
       product.precio = product.precio + precioInicial
        product.cantidad++
        e++

        

             }}>+</Button>
  
             <span>{e}</span>

      <Button className='button'  onClick={ () =>{


  product.precio = product.precio - precioInicial

product.cantidad--
e--

  }
     }
      >-</Button>

      <Button variant="primary" className='button' onClick={ () =>{
        agregarCarrito(product)
        window.location.reload(true);
}

}>agregar al carrito</Button>
    </div>
  )
}

export default ItemDetail

