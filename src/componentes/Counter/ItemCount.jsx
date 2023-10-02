import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Importa SweetAlert

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

    // Muestra una alerta de SweetAlert cuando se agrega al carrito
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500, // Cierra automáticamente después de 1.5 segundos
    });
  };

  return (
    <div>
      <h2>Cantidad: {counter}</h2>
      <div className="d-flex">
        <button className="btn btn-primary me-2" onClick={handleSubtract}>
          -
        </button>
        <button className="btn btn-primary" onClick={handleAdd}>
          +
        </button>
      </div>
      <button className="btn btn-success mt-2" onClick={handleOnAdd}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;