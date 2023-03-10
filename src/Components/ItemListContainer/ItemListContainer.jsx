import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { products } from '../../productMok'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {
  const {id} = useParams()

  const [product, setProduct] = useState([])
  const productosFiltrados = products.filter((elemento)=>(elemento.id === Number(id)))
  console.log(productosFiltrados)

  useEffect(()=>{
    const productlist = new Promise ((resolve, reject)=>{
      resolve(id ? productosFiltrados : products)
    })
    productlist
    .then((res)=> {setProduct(res)})
    .catch((error)=>{console.log(error)})
  }, [id])
  
  console.log(product)
  

  return (
    <div>
     <ItemList product={product} />

    </div>
  )
}
