import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [ loading, setLoading ] = useState(true)
  const {cid} = useParams ()
 

   useEffect(()=>{
         const db = getFirestore()
         const queryCollection = collection(db, 'productos')
         const queryCollectionFilter = cid ? query(queryCollection, where('categoria', '==', cid)) : queryCollection

         getDocs (queryCollectionFilter)
          .then(resp => setProductos(resp.docs.map(prod =>( { id: prod.id, ...prod.data() }))))
          .catch(err => console.log(err))
          .finally(()=> setLoading(false))
        
        }, [cid])

        

  return (
    <div className="bg-light text-center my-4">
      <h2>Lista de Productos</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer;