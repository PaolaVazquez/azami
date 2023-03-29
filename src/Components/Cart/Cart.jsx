import "./Cart.css"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Swal from "sweetalert2";
import DeleteIcon from '@mui/icons-material/Delete';
import { FormCheckout } from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom"
export const Cart = () => {

  const { cart, clearCart, getTotalPrice, deleteProductById } = useContext( CartContext )

  const [showForm, setShowForm] = useState(false)

  const [orderId, setOrderId] = useState(null)

  const clear = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };
  //console.log(cart)
  if(orderId){
    return(
      <div>
        <h2>Gracias por su compra</h2>
        <h4>Su comprobante es: {orderId}</h4>
        <Link to="/"> Seguir comprando</Link>
      </div>
    )
  }
  return (
    <div>
      {!showForm ? (
        <div className="containerCart">
          <Container maxWidth="xl">
                <Box sx={{
                  width: "100%",
                }}>
                    <h1 className="titCart">Carrito</h1>
                  <Grid container spacing={3}>
                    <Grid item xs={8}>
                    
                      <div  className="tableCart">
                        {
                          cart.map( (elemento) => {
                            return (
                              <div key={elemento.id} className="itemCart">
                                <div className="imgCart">
                                  <img src={elemento.image} alt="" />
                                </div>
                                <div className="titleCart">
                                  <h2>{elemento.nombre}</h2>
                                </div>
                                <div className="quantityCart">
                                  <h2>Cantidad: {elemento.quantity}</h2>
                                </div>
                                <div className="priceCart">
                                  <h3>$ {elemento.price}</h3>
                                </div>
                                <div className="buttonsCart">
                                  <DeleteIcon color="#937EBF" onClick={()=>deleteProductById(elemento.id)} />
                                </div>
                              </div>
                            )
                          })
                        }
                        <div className="subTotal">
                          <h4>Subtotal: $<b className="priceTotal">{getTotalPrice()}</b></h4>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      <div className="btn-cart">
                        <button className="btn-vaciar" onClick={clear} variant="contained">Vaciar el carrito </button>
                        <button className="btn-compra" onClick={()=>setShowForm(true)}>Terminar la compra</button>
                      </div>
                      
                    </Grid>
                    
                        
                  </Grid>
                    
                </Box>
          </Container>
        </div>
        ): (<FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart}/>
        )}
      
     
    </div>
  )
}
