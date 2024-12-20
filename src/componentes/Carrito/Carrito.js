import React from 'react';
import { useCart } from './CartContext';
import './Carrito.css';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((product) => (
  <li className="producto-cart" key={product.id}>
    <img src={product.image} alt={product.name} style={{ width: '20rem', height: '20rem' }} />
    <h3>{product.name}</h3>
    <p>Precio: ${product.price*product.quantity}</p>
    <p>Cantidad: {product.quantity}</p>

    <button className="btn-cart" onClick={() => incrementQuantity(product.id)}>+</button>
    <button className="btn-cart" onClick={() => decrementQuantity(product.id)}>-</button>
    <button className="btn-cart" onClick={() => removeFromCart(product.id)}>Eliminar del carrito</button>
  </li>
))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
