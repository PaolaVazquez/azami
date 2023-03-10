import { Item } from "../Item/Item"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const ItemList = ({product}) => {
  return (
    <Box sx={{
      width: "100%",
    }}>
       <Grid container>
       {
            product.map((element) =>{
                return <Item key={element.id} element={element}/>
            })
        }
       </Grid>
        
    </Box>
  )
}
