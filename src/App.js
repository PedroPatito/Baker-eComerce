import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CheckOut from "./components/CheckOut";
import "./products.css"
import Brief from "./components/brief";
import ItemCategoriesContainer from "./components/itemCategoriesContainer";


function App() {

  return (



    <div className="App">

      <BrowserRouter>
      <NavBar />
        <Routes> 
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route path="categoria/ItemDetailContainer" element={<Product/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:name" element={<ItemCategoriesContainer/>}/>
          <Route path="/checkOut" element={<CheckOut/>}/>
          <Route path="/Brief" element={<Brief/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
