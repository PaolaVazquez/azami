import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import "./ItemCount.css"
import RemoveIcon from '@mui/icons-material/Remove';

export const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [contador, setContador] = useState(initial) 

    const sumar = ()=>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const restar = ()=>{
        if(contador > 0){
            setContador(contador -1)
        }
    }
 
  return (
    <div className="itemCount">
        <div className="contador">
            <button onClick={sumar} className="btn-add">
                <p><AddIcon size={10} color="#937EBF" /></p> 
            </button>
            <h2>{contador}</h2>
            <button onClick={restar} className="btn-remove">
                <p><RemoveIcon size={10} color="#937EBF"/></p>
            </button>
        </div>
        <button onClick={ ()=> onAdd(contador)} className="btn-add-cart" >Agregar al carrito</button>
    </div>
  )
}
