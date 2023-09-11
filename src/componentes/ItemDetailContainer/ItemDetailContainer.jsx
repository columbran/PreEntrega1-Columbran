import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { mFetch } from "../../utilidades/data"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
   
  const [producto, setProducto] = useState ({})
  const {pid} = useParams ()
  
    useEffect (()=>{
    

    mFetch (Number(pid))
      .then(resp => setProducto(resp))
      .catch(err => console.log(err))
   },[])
    
  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer