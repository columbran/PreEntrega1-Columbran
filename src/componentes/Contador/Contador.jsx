import React, { useState } from 'react';

function ItemCounter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onAdd = () => {
    if (count > 0) {
      alert(`Agregaste ${count} pruductos al carrito`);
      
    } else {
      alert('Debes seleccionar al menos 1 artículo para agregar al carrito');
    }
  };

  return (
    <div>
      
      <h2>Cantidad: {count}</h2>
      <div className="d-flex">
        <button className="btn btn-primary me-2" onClick={handleDecrement}>-</button>
        <button className="btn btn-primary" onClick={handleIncrement}>+</button>
      </div>
      <button className="btn btn-success mt-2" onClick={onAdd}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCounter;