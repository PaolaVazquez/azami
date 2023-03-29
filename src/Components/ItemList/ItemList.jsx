import { Item } from "../Item/Item"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
export const ItemList = ({product}) => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl">
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
     
    </Container>
  </React.Fragment>
    
  )
}
