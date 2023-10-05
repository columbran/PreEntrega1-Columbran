import { useCartContext } from "../../Context/CartContext";

const CardWidget = () => {
  const { totalQuantity } = useCartContext();

  return (
    <div className="d-flex align-items-center">
      {totalQuantity() !== 0 && (
        <div className="me-2 d-none d-lg-block">
          <span className="badge bg-secondary">{totalQuantity()}</span>
        </div>
      )}

      
      <img
        src="https://i.ibb.co/xSFS2KP/cart.png"
        alt="carrito"
        width="30"
        height="30"
        className="d-none d-lg-block"
      />
    </div>
  );
};

export default CardWidget;