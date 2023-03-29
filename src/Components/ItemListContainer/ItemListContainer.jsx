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

  //console.log(productosFiltrados)

  useEffect(()=>{


    // const itemsCollection = collection(db, "products" )
    // getDocs(itemsCollection)
    // .then(res => {
    //   let products = res.docs.map((element) => {
    //     return{
    //       ...element.data(), 
    //       id: element.id
    //     }
    //   })
    //   setProduct(products
    //     )
    // })
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
  
  //IF CON  RETURN TEMPRANO
  // if(product.length === 0){
  //   return <h1>Cargando..............</h1>
  // }


  //console.log(product)
  

  return (
    <div>
      {/* {
        product.length > 0 && <ItemList product={product} />
      } */}
     
      {
        product.length > 0 ? (<ItemList product={product} />) : (<HashLoader
        color={"red"}
        //loading={loading}
        //cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />)
      }

    </div>
  )
}
