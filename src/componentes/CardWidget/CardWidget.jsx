import { useCartContext } from "../../Context/CartContext"


const CardWidget = () => {

  const {totalQuantity} = useCartContext ()

  return (
    <div>
      {totalQuantity() !== 0 && totalQuantity()}


    <img className="w-25" src="https://i.ibb.co/xSFS2KP/cart.png" alt="carrito" />
    
    </div>
  )
}

export default CardWidget