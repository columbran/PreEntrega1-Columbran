import React, { useEffect, useState } from "react";
import { mFetch } from "../../utilidades/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {cid} = useParams ()
  // console.log (cid)

  useEffect(() => {
    if (cid) {
      mFetch()
      .then((respuesta) => setProductos(respuesta.filter(producto => cid === producto.categoria)))
      .catch((err) => console.log(err));
      
    } else {

    mFetch()
    .then((respuesta) => setProductos(respuesta))
    .catch((err) => console.log(err));
  } 
    
  }, [cid]);

  return (
    <div className="bg-light text-center my-4">
      <h2>Lista de Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;