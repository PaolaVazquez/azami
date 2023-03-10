
import { CardWidget } from "../CardWidget/CardWidget";
import "./Navbar.css"
import { Link } from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const Navbar = ()=>{ 
    let numero = 12;
    return (
        
    <div className="container-navbar">
        <div className="prom-franja">
            <div className="">
                <h2>
                    <FavoriteIcon/>
                    HAZ TU PEDIDO 
                    <FavoriteIcon/>
                </h2>
            </div>
            <div className="">
                <h2>Mayor a $700MXN y llevate <b>GRATIS</b> un llavero</h2>
            </div>

        </div>
        <nav className="nav">
            <div className="container">
                <Link to="/">
                    <img src="https://res.cloudinary.com/djstui4rm/image/upload/v1677172222/Azami/logo-azami-bco_r1gio5.png" alt="Logo Azami" className="logo-header"/>
                </Link>
                <ul className="links ">
                    <Link className="link" to={"/"}>INICIO</Link>
                    <Link className="link dropmenu" >
                        PRODUCTOS <KeyboardArrowDownIcon/>
                        <div className="dropConten">
                            <Link className="subcategory" to={"/category/3"}>JOYERIA</Link>
                            <Link className="subcategory" to={"/category/1"} >CALENDARIOS</Link>
                            
                        </div>
                    </Link>
                    <Link className="link" >NOVEDADES</Link>
                    <Link className="link">CÓMO COMPRAR</Link>
                    <Link className="link"> <CardWidget numero={numero}/></Link>
                </ul>
            </div>
        </nav>
        
    </div>
    );
};
