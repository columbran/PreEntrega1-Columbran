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

  const { cartList, deleteCart, removeProduct, totalPrice, removeItem } = useCartContext();

  const handleAddOrder = async (orderData) => {
    // Previene la presentación del formulario por defecto.
    // evt.preventDefault();

    // Crea un objeto 'order' que incluye la información de contacto del usuario, los elementos en el carrito (transformados para incluir ID, nombre, precio y cantidad) y el precio total.
    const order = {};
    order.buyer = orderData;
    order.items = cartList.map((prod) => {
      return { id: prod.id, name: prod.name, price: prod.precio, quantity: prod.quantity };
    });

    order.total = totalPrice();

    // Conéctate a Firebase Firestore, crea una referencia a la colección 'orders' y agrega el documento del pedido.
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

  // Función para actualizar el estado cuando los usuarios ingresan su información de contacto.
  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      {id !== '' && <h3>Se ha generado la compra con el ID: {id}</h3>}
      {cartList.length > 0 ? (
        <div>
          {cartList.map((prod) => (
            <div key={prod.id}>
              <img src={prod.imgUrl} className="w-25" alt={prod.name} />
              {prod.name} -
              Cantidad: {prod.quantity} -
              <button onClick={() => removeItem(prod.id)}>X</button>
            </div>
          ))}
          <button onClick={deleteCart}>Vaciar carrito</button>
          {totalPrice() !== 0 && <h2> Precio Total: {totalPrice()} </h2>}

          {/* Renderiza el formulario para que los usuarios ingresen su información de contacto y completen la compra. */}
          <Form onSubmit={handleAddOrder} />
        </div>
      ) : (
        <center>
          <h2> No hay productos en el carrito</h2>
          <Link to="/"> Regresa al inicio para comprar</Link>
        </center>
      )}
    </>
  );
};

export default CartContainer;