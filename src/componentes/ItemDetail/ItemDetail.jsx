import { useContext, useState } from "react";
import { Link, } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../Counter/ItemCount";



const ItemDetail = ( {producto} ) => {

  const [isInCount, setisInCount ] = useState (true)

  const {addProduct} = useContext (CartContext)
    
    const onAdd = (quantity) => {
    
      addProduct ({...producto, quantity})
      setisInCount (false)
      
    }
git log
    
  return (
    <div className="row bg-light">
    <h2 className="text-primary">VISTA DE DETALLE</h2>
    <div className="col">
    <img className="w-25" src={producto.imgUrl} alt="imagen prenda" />
    <div className="">
      <p className="text-muted"><strong>Nombre:</strong> {producto.name} </p>
      <p className="text-muted"><strong>Descripción:</strong> {producto.descripcion} </p>
      <p className="text-muted"><strong>Stock:</strong>: {producto.stock} </p>
      <p className="text-muted"><strong>Precio:</strong>: ${producto.precio} </p>
      </div> 

    <div className="col">  
    {isInCount ?
    <ItemCount initial={1}  stock={producto.stock} onAdd={onAdd}/>
       :
         <> 
          <Link to= {'/contador'}>
          <button className="btn btn-primary">ir al carrito</button>
          </Link>
          <Link to= {'/'}>
          <button className="btn btn-secondary">Sseguir comprando</button>
          </Link>
         </>
    } 
    </div>

    </div>
    </div>

  )
}

export default ItemDetail;