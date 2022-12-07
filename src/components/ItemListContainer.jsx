import React from 'react'
import Harina from './item'
import { Link } from 'react-router-dom'
export default function ItemListContainer() {
  return (
    <div>
      <h1>Bienvenido, próximamente todo lo que necesita para hacer crecer sus panes, aquí</h1>
      <Link to={"ItemDetailContainer"}><Harina/></Link>
    </div>
  )
}
