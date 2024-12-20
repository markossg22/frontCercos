// src/components/Checkout.js
import React from 'react';
import axios from 'axios';
import { useCart } from './CartContext';

const Checkout = () => {
  const { cart } = useCart();

  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/mercadopago/create_preference', {
        items: cart.map((product) => ({
          title: product.name,
          quantity: product.quantity,
          price: product.price,
        })),
      });

      // Redirigir al usuario a Mercado Pago
      window.location.href = response.data.init_point;
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      alert('Hubo un error al procesar el pago.');
    }
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <p>Los productos que estás comprando:</p>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Precio: ${product.price * product.quantity}</p>
                <p>Cantidad: {product.quantity}</p>
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Ir al pago</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
