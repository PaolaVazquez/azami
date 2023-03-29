import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import "./Login.css"


export const Login = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box >
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={6}>
              <div>xs=6</div>
            </Grid>
            <Grid xs={6}>
              <div>xs=6</div>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </React.Fragment>
  )
}
