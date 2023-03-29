import { createContext, useState } from "react"
export const CartContext = createContext()
export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])
  
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
  const isInCart = ( id )=>{
    return cart.some( (elemento) => elemento.id === id)
  }
  const clearCart = () => {
    setCart([]);
  };


  const getTotalQuantity = () => {

    return cart.reduce( (acc, elemento)=>{
      return acc + elemento.quantity
    } , 0 )

  };


  const getTotalPrice = ()=> {
    let precioTotal = cart.reduce((acc, elemento) =>{
      return acc + elemento.quantity * elemento.price;
    }, 0)
    return precioTotal;
  }
  const deleteProductById = (id)=>{
      const newCart = cart.filter((element) => element.id !== id)
      setCart(newCart)
  }
    
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
