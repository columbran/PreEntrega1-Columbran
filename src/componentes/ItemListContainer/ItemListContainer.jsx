import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [ loading, setLoading ] = useState(true)
  const {cid} = useParams ()
 

   useEffect(()=>{
         const db = getFirestore()
         const queryCollection = collection(db, 'products')
         const queryCollectionFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection

         getDocs (queryCollectionFilter)
          .then(resp => setProducts(resp.docs.map(prod =>( { id: prod.id, ...prod.data() }))))
          .catch(err => console.log(err))
          .finally(()=> setLoading(false))
        
        }, [cid])

        

        return (
           <div >
            <h2 className="running-title">RUNGEAR</h2>
            <ItemList products={products} />
          </div>
  )
}

export default ItemListContainer;