import { createContext, useState } from "react"
export const CartContext = createContext()
export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])
  
  //AGREGAR
  const agregarCarrito = (producto) =>{
    let existe = isInCart(producto.id)
    
    if(existe ){
      let newCart = cart.map((elemento) => {
        if(elemento.id === producto.id){
          return {
            ...elemento,
            quantity: producto.quantity
          }
        }else{
          return elemento
        }
      })

      setCart(newCart)
    } else{
      setCart( [...cart, producto] )
    }
  }
  // FUNCION PARA SABER SI UN PRODUCTO YA ESTA EN EL CARRITO
  const isInCart = ( id )=>{
    return cart.some( (elemento) => elemento.id === id)
  }
  // FUNCION PARA LIMPIAR EL ACARRITO
  const clearCart = () => {
    setCart([]);
  };


  // OBTENER EL TOTAL DE LAS CANTIDADES DE LOS ELEMENTOS DEL CARRITO

  const getTotalQuantity = () => {

    return cart.reduce( (acc, elemento)=>{
      return acc + elemento.quantity
    } , 0 )

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //   total += cart[i];
    // }
    // return total;
  };

  //TOTAL DEL PRECIO DEL CARRITO

  const getTotalPrice = ()=> {
    let precioTotal = cart.reduce((acc, elemento) =>{
      return acc + elemento.quantity * elemento.price;
    }, 0)
    return precioTotal;
  }
  //ELIMINAR
  const deleteProductById = (id)=>{
      const newCart = cart.filter((element) => element.id !== id)
      setCart(newCart)
  }
    
  //CONTAR
  const getQuantityById = (id)=>{
    const productSelected = cart.find((elemento)=> elemento.id === id)
    return productSelected?.quantity
  }
 
  let data ={
    cart: cart,
    agregarCarrito: agregarCarrito,
    deleteProductById: deleteProductById,
    getQuantityById: getQuantityById,
    clearCart: clearCart,
    getTotalQuantity: getTotalQuantity,
    getTotalPrice: getTotalPrice,
  }

  return (
    <CartContext.Provider value={ data }>
      {children}
    </CartContext.Provider>
  )
}
