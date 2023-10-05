import { useContext, useState } from "react";
import { Link, } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../Counter/ItemCount";



const ItemDetail = ( {product} ) => {

  const [isInCount, setisInCount ] = useState (true)

  const {addProduct} = useContext (CartContext)
    
    const onAdd = (quantity) => {
    
      addProduct ({...product, quantity})
      setisInCount (false)
      
    }

    
  return (
    <div className="container mt-5 bg-light ">
    <h2 className="running-title">DETALLE</h2>
    <div className="row justify-content-center align-items-center">
    <div className="col-md-4">
          <img className="w-100 rounded" src={product.imgUrl} alt="imagen prenda" />
        </div>
        <div className="col-md-6">
          <p className="text-muted"><strong>Nombre:</strong> {product.name} </p>
          <p className="text-muted"><strong>Descripción:</strong> {product.description} </p>
          <p className="text-muted"><strong>Stock:</strong>: {product.stock} </p>
          <p ><strong>Precio:</strong>: ${product.price} </p>
        </div>
      </div>

      <div className=" d-flex justify-content-center align-items-center mt-3">
        {isInCount ? (
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
          ) : (
            <div className="d-flex justify-content-center mt-3">
              
              <Link to="/" className="btn btn-secondary ">Seguir comprando</Link>
              
              <Link to="/contador" className="btn btn-primary">Ir al carrito</Link>
              
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default ItemDetail;