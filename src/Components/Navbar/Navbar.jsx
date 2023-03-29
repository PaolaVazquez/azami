
import { CardWidget } from "../CardWidget/CardWidget";
import "./Navbar.css"
import "./menu.js"
import { Link } from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { collection, getDocs} from "firebase/firestore"
import { db } from "../../firebaseConfig"


export const Navbar = ({children})=>{ 
    const [categoryList, setCategoryList] =React.useState([])
    React.useEffect(()=>{
        const itemsCollection = collection(db, "categories")
        getDocs(itemsCollection).then((res) => {
            let arrayCategories = res.docs.map( (category) =>{
                return{
                    ...category.data(),
                    id: category.id
                };
            });
            setCategoryList(arrayCategories)
        });
    }, []);
    return (
        
    <div className="container-navbar">
        <div className="prom-franja">
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Box >
                        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                            <Grid item xs={12} md={4}>
                                <div className="">
                                    <h2>
                                        <FavoriteIcon/>
                                        HAZ TU PEDIDO 
                                        <FavoriteIcon/>
                                    </h2>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <div className="">
                                    <h2>Mayor a $700MXN y llevate <b>GRATIS</b> un llavero</h2>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>

                </Container>
            </React.Fragment>
        </div>
        <header>
            <div className="logo">
                <Link to="/">
                    <img src="https://res.cloudinary.com/djstui4rm/image/upload/v1677172222/Azami/logo-azami-bco_r1gio5.png" alt="Logo Azami" className="logo-header"/>
                </Link>
            </div>
            <nav className="responsive-menu">
                <a  className="toggle-menu" data-toggle-class="active" data-toggle-target=".main-menu, this"><svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h24c1.104 0 2-.896 2-2s-.896-2-2-2H4c-1.104 0-2 .896-2 2s.896 2 2 2zm24 4H4c-1.104 0-2 .896-2 2s.896 2 2 2h24c1.104 0 2-.896 2-2s-.896-2-2-2zm0 8H4c-1.104 0-2 .896-2 2s.896 2 2 2h24c1.104 0 2-.896 2-2s-.896-2-2-2z" fill="#937EBF"/></svg><span>Menu</span></a>
                
                <ul className="main-menu">
                    <li>
                        <Link to={"/"}><span>INICIO</span></Link>
                    </li>
                    <li>
                        <Link><span>PRODUCTOS </span></Link> 
                        <ul className="sub-menu">
                            {
                                categoryList.map((category)=>{
                                    return(
                                        <li key={category.id}><Link  to={category.path} ><span>{category.title}</span></Link></li>
                                    )
                                })
                            }
                        </ul>
                    </li>
                    
                    <li>
                        <Link ><span>NOVEDADES</span></Link>
                    </li>
                    <li>
                        <Link ><span>CÓMO COMPRAR</span></Link>
                    </li>
                    <li>
                        <span> <CardWidget /></span>
                    </li>
                </ul>
            </nav>
        
        </header>
        
        
    </div>
    );
};