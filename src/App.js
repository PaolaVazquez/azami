
import { ConsumiendoApis } from "./Components/ConsumiendoAPis/ConsumiendoApis";
import { Footer } from "./Components/Footer/Footer";
import { ItemCount } from "./Components/ItemCount/ItemCount";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { Navbar } from "./Components/Navbar/Navbar"; //importar por constante o función
import { ProductCard } from "./Components/ProductCard/ProductCard";
//import Navbar from "./Components/Navbar/Navbar"; //importar por defecto
import { BrowserRouter, Routes, Route, Form }  from "react-router-dom"
import { Cart } from "./Components/Cart/Cart";
import { Login } from "./Components/Login/Login";
import { Formulario } from "./Components/Formulario/Formulario";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";

//{/* COMENTAR */}
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
          {/*<ProductCard title="Producto 1" price={200} isRed={false}/>*/}
          
          {/*<ItemCount stock={5} initial={1} onAdd={onAdd}/>*/}
          
        </Routes>
        <Footer/>
      </CartContextProvider>
      </BrowserRouter>

  );
}

export default App;
