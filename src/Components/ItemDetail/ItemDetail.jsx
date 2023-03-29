import { ItemCount } from '../ItemCount/ItemCount'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const ItemDetail = ({productSelected, onAdd, quantity}) => {
  return (
    <Box>
    <Container maxWidth="sm">
      <img src={productSelected.image} alt=""  style={{width: "400px"}}/>
      <h1>{productSelected.nombre }</h1>
      <h2>{productSelected.description}</h2>
      <h3>$ {productSelected.price} MXN</h3>
      <ItemCount stock={productSelected.stock} onAdd={onAdd} initial={quantity}/>
    </Container>
  </Box>
  )
}
