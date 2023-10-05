import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [id, setId] = useState('');

  const { cartList, deleteCart, totalPrice, removeItem } = useCartContext();

  const handleAddOrder = async (orderData) => {
    
    const order = {};
    order.buyer = orderData;
    order.items = cartList.map((prod) => {
      return { id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity };
    });

    order.total = totalPrice();

    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, 'orders');
    addDoc(ordersCollection, order)
      .then(({ id }) => setId(id))
      .catch((err) => console.log(err))
      .finally(() => {
        setDataForm({
          name: '',
          phone: '',
          email: '',
        });
        deleteCart();
      });
  };

  
  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div className="container mt-4">
    { id !== '' && (
  <div className="alert alert-success text-center">
    <h2 className="alert-heading">¡Compra exitosa!</h2>
    <h4 className="m-0">Se ha generado la compra con el ID: {id}</h4>
  </div>
)}
      {cartList.length > 0 ? (
        <div>
          {cartList.map((prod) => (
            <div key={prod.id} className="row mb-3">
              <div className="col-md-3">
                <img
                  src={prod.imgUrl}
                  className="img-fluid"
                  alt={prod.name}
                />
              </div>
              <div className="col-md-6">
                <h4>{prod.name}</h4>
                <p >Cantidad: {prod.quantity}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(prod.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-warning"
              onClick={deleteCart}
            >
              Vaciar carrito
            </button>
          </div>
          {totalPrice() !== 0 && (
            <h2 className="mt-4">
              Precio Total: ${totalPrice()}
            </h2>
          )}

          
          <Form onSubmit={handleAddOrder} />
        </div>
      ) : (
        <div className="text-center mt-5">
          <h2>No hay productos en el carrito</h2>
          <Link to="/" className="btn btn-primary">
            Regresar al inicio para comprar
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;