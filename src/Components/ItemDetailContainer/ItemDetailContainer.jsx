import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { db } from "../../firebaseConfig"
import Swal from "sweetalert2";
import { CartContext } from '../../context/CartContext';
import { getDoc, collection, doc } from "firebase/firestore"
import { ItemDetail } from '../ItemDetail/ItemDetail';
export const ItemDetailContainer = () => {

  const {id} = useParams();

  const { agregarCarrito, getQuantityById } = useContext ( CartContext )
  const [productSelected, setProductSelected] = useState({})

  useEffect(()=>{
    const itemsCollection = collection(db, "products")
    const ref = doc(itemsCollection, id)
    getDoc(ref)
    .then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id
      });
    });
  }, [id]);

  //console.log(productSelected)
  const onAdd = (cantidad)=>{
    let producto =  {
      ...productSelected,
      quantity: cantidad
    }
    agregarCarrito(producto)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    });
  };
  let quantity = getQuantityById( id)
  return (
    <ItemDetail 
      productSelected={productSelected}
      onAdd={onAdd}
      quantity={quantity}
    />

  )
}
