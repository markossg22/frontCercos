import React from 'react';
import { useCart } from './CartContext';
import axios from 'axios';

const Carrito = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  // Manejo del checkout (pago con Mercado Pago)
  const handleCheckout = async () => {
    try {
      // Preparar los items del carrito para enviarlos al backend
      const response = await axios.post('http://localhost:5000/api/mercadopago/create_preference', {
        items: cart.map((product) => ({
          title: product.name,
          quantity: product.quantity,
          price: product.price,
        })),
      });

      // Redirigir al usuario a la URL de Mercado Pago
      window.location.href = response.data.init_point;
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      alert('Hubo un error al procesar el pago.');
    }
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                <h3>{product.name}</h3>
                <p>Precio: ${product.price * product.quantity}</p>
                <p>Cantidad: {product.quantity}</p>
                <button onClick={() => incrementQuantity(product.id)}>Añadir más</button>
                <button onClick={() => decrementQuantity(product.id)}>Eliminar uno</button>
                <button onClick={() => removeFromCart(product.id)}>Eliminar del carrito</button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '20px' }}>
            <h3>Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</h3>
            <button onClick={handleCheckout}>Ir al pago</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
