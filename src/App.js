
import { Footer } from "./Components/Footer/Footer";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { Navbar } from "./Components/Navbar/Navbar"; 
import { BrowserRouter, Routes, Route }  from "react-router-dom"
import { Cart } from "./Components/Cart/Cart";
import { Login } from "./Components/Login/Login";
import { ItemDetail } from "./Components/ItemDetailContainer/ItemDetail";

function App() {
  const onAdd = (cantidad)=>{
    console.log(`se agrego al carrito ${cantidad} al carrito`)
  }
  return (
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/category/:id" element={ <ItemListContainer /> }/>
          <Route path="/cart" element={ <Cart/>  }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="*" element={<h1>Error 404: Not Found</h1>} />
          <Route path="/itemDetail/:id" element={<ItemDetail/>}/>
          
        </Routes>
        <Footer/>

        
      </BrowserRouter>

  );
}

export default App;
