import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";
import { db } from "../../firebaseConfig"
import { collection, getDocs, query, where } from 'firebase/firestore'

export const ItemListContainer = () => {
  const {categoryName} = useParams()

  const [product, setProduct] = useState([])

  useEffect(()=>{
    const itemsCollection = collection(db, "products")
    let consulta = undefined;
    if(categoryName){
      const q = query(itemsCollection, where("category", "==", categoryName))
      consulta = getDocs(q)
    }else{
      consulta = getDocs(itemsCollection);
    }
    
    consulta.then(res =>{
      let products = res.docs.map((element) =>{
        return {
          ...element.data(), 
          id: element.id
        }
      })
      setProduct(products)
    })
  }, [categoryName])
  
  

  return (
    <div>
      {
        product.length > 0 ? (<ItemList product={product} />) : (<HashLoader
        color={"red"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />)
      }

    </div>
  )
}
