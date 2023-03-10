import { width } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../productMok'
import { ItemCount } from '../ItemCount/ItemCount'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const ItemDetail = () => {

  const {id} = useParams()
  const productSelected = products.find((element) => element.id === Number(id));
  console.log(productSelected)
  const onAdd = (cantidad)=>{
    console.log(`Se agrego al carrito ${cantidad} productos`)
  }
  return (
    <Box>
      <Container maxWidth="sm">
        <img src={productSelected.image} alt=""  style={{width: "400px"}}/>
        <h1>{productSelected.nombre }</h1>
        <h2>{productSelected.description}</h2>
        <h3>$ {productSelected.price} MXN</h3>
        <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
      </Container>
    </Box>
  )
}
