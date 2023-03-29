
import { Footer } from "./Components/Footer/Footer";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { Navbar } from "./Components/Navbar/Navbar"; 
import { BrowserRouter, Routes, Route, Form }  from "react-router-dom"
import { Cart } from "./Components/Cart/Cart";
import { Login } from "./Components/Login/Login";
import { Formulario } from "./Components/Formulario/Formulario";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  const onAdd = (cantidad)=>{
    console.log(`se agrego al carrito ${cantidad} al carrito`)
  }
  return (
      <BrowserRouter>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/category/:categoryName" element={ <ItemListContainer /> }/>
          <Route path="/cart" element={ <Cart/>  }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="*" element={<h1>Error 404: Not Found</h1>} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/formulario" element={<Formulario/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </CartContextProvider>
      </BrowserRouter>

  );
}

export default App;
