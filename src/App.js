import React  from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import Moldes from "./pages/moldes"
import Herramientas from "./pages/herramientas"
import Insumos from "./pages/insumos"
import Maquinaria from "./pages/maquinaria"
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      
      {/* <ItemListContainer /> */}
      <BrowserRouter>
      <NavBar />
        <Routes> 
          <Route exact path="/" element={<Home/>}/>
          <Route  path="herramientas" element={<Herramientas/>}/>
          <Route  path="insumos" element={<Insumos/>}/>
          <Route  path="maquinaria" element={<Maquinaria/>}/>
          <Route  path="moldes" element={<Moldes/>}/>
          <Route path="ItemDetailContainer" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
