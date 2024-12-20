import React from 'react';
import { useCart } from './CartContext';
import axios from 'axios';

const Carrito = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  // Manejo del checkout (pago con Mercado Pago)
  const handleCheckout = async () => {
      try {
          // Preparar los items del carrito para enviarlos al backend
          const response = await axios.post('http://localhost:8080/api/mercadopago/create_preference', {
              items: cart.map(product => ({
                  title: product.name,
                  quantity: product.quantity,
                  price: product.price,
              })),
          });
          console.log(response.data.id)
          // Redirigir al usuario a la URL de Mercado Pago
          window.location.href = "https://www.mercadopago.com/mla/checkout/start?pref_id="+response.data.id;
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
        <div className="carrito">
            {cart.map((product) => (
              <div className="producto-cart" key={product.id}>
                <img src={product.image} alt={product.name} style={{ width: '90%', height: '50%' }} />
                <h2>{product.name}</h2>
                <h3>Precio: ${product.price*product.quantity}</h3>
                <h3>Cantidad: {product.quantity}</h3>   
                <button className="btn-cart" onClick={() => incrementQuantity(product.id)}><h2>+</h2></button>
                <button className="btn-cart" onClick={() => decrementQuantity(product.id)}><h2>-</h2></button>
                <button className="btn-cart" onClick={() => removeFromCart(product.id)}><h2>🗑</h2></button>
              </div>
            ))}
        </div>
      )}
      <div>
        <h3>Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</h3>
        <button className='btn-checkout' onClick={handleCheckout}>Ir al pago</button>
      </div>
    </div>
  );
};

export default Carrito;
