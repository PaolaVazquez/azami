//rafc hace función con exportación de función
//fafce hace función con exportación por default
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="footer">
      {/* <Grid container spacing={3} className="bg-footer">
        <Grid item xs={4}>
          <div className='footer-azami'>
            <Link to="/">
              <img src="https://res.cloudinary.com/djstui4rm/image/upload/v1677172222/Azami/logo-azami-bco_r1gio5.png" alt="Logo Azami" className="logo-header"/>
            </Link>
            <p>Creamos azami </p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="atencion-legal">
              <h3>SERVICIO AL CLIENTE</h3>
              <ul>
                <Link className="atencion-link">Preguntas frecuentes</Link>
                <Link className="atencion-link">Envíos y devoluciones</Link>
              </ul>
              
              <h3>LEGAL</h3>
              <ul>
                <Link className="legal-link">Términos y condiciones</Link>
                <Link className="legal-link">Políticas de privacidad</Link>
              </ul>
              
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="redes-sociales">
              <h3>SIGUENOS EN:</h3>
              <Link href="" className="icon-sm"><FacebookIcon/></Link>
              <Link href="" className="icon-sm"><InstagramIcon/></Link>
              <Link href="" className="icon-sm"><InstagramIcon/></Link>
          </div>
        </Grid>
        
      </Grid> */}
    </Box>
  )
}
