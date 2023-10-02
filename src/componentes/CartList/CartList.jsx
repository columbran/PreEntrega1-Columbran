import React from 'react';

const CartList = ({ cartList, removeItem, deleteCart }) => {
  return (
    <div>
      {cartList.map((prod) => (
        <div key={prod.id}>
          <img src={prod.imgUrl} className='w-25' alt={prod.name} />
          {prod.name} - Cantidad: {prod.quantity} -{' '}
          <button onClick={() => removeItem(prod.id)}>X</button>
        </div>
      ))}
      <button onClick={deleteCart}>vaciar carrito</button>
    </div>
  );
};

export default CartList;