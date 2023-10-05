import React, { useState } from 'react';
import Swal from 'sweetalert2'; 

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handleAdd = () => {
    if (counter < stock) setCounter(counter + 1);
  };

  const handleSubtract = () => {
    if (counter > initial) setCounter(counter - 1);
  };

  const handleOnAdd = () => {
    onAdd(counter);

    
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500, 
    });
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h3>Cantidad: {counter}</h3>
      <div className="d-flex">
        <button className="btn btn-primary me-2" onClick={handleSubtract}>
          -
        </button>
        <button className="btn btn-primary" onClick={handleAdd}>
          +
        </button>
      </div>
      <button className="btn btn-primary mt-2" onClick={handleOnAdd}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;