import React, { useState } from 'react';

const OrderForm = ({ onSubmit }) => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    if (!dataForm.name || !dataForm.phone || !dataForm.email) {
      
      setErrors({
        name: !dataForm.name,
        phone: !dataForm.phone,
        email: !dataForm.email,
      });
    } else {
      
      onSubmit(dataForm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-bold">Nombre</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          id="name"
          name="name"
          placeholder="Ingrese nombre"
          value={dataForm.name}
          onChange={handleOnChange}
        />
        {errors.name && <div className="invalid-feedback">¡Nombre es obligatorio!</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label fw-bold">Teléfono</label>
        <input
          type="text"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          id="phone"
          name="phone"
          placeholder="Ingrese celular"
          value={dataForm.phone}
          onChange={handleOnChange}
        />
        {errors.phone && <div className="invalid-feedback">¡Teléfono es obligatorio!</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
        <input
          type="text"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          id="email"
          name="email"
          placeholder="Ingrese email"
          value={dataForm.email}
          onChange={handleOnChange}
        />
        {errors.email && <div className="invalid-feedback">¡Email es obligatorio!</div>}
      </div>
      <button type="submit" className="btn btn-success">Terminar Compra</button>
    </form>
  );
};

export default OrderForm;