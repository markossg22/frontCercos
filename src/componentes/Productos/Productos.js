import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../Carrito/CartContext.js';

//Comienzo de carrito
const Index = () => {
  const [products, setProducts] = useState([]);
  const {addToCart } = useCart(); // Usar el hook para obtener cart y addToCart

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Hacemos la solicitud GET a la API para obtener los productos
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    fetchProducts();
  }, []);

  //const addToCart = (product) => {
  //  setCart((prevCart) => [...prevCart, product]);
  //};
//FINALIZACION CARRITO

  return (
      <main className="content">
        <h1>Vista Productos</h1>
        <div className="Productos">
          <h2>Nuestros Productos</h2>
          <div style={styles.grid}>
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  ...styles.card,
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div style={styles.overlay}>
                  <h3>{product.name}</h3>
                  <p>Precio: ${product.price}</p>
                  <button onClick={() => addToCart({ ...product, id: product._id, quantity: 1 })}> 
      Añadir al carrito
    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      /* <aside className="sidebar"><Cart cart={cart}></Cart></aside> */
  );
};

//STYLES productos
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
    gap: '3rem',
    padding: '3rem',
  },
  card: {
    borderRadius: '3rem',
    padding: '1rem',
    textAlign: 'center',
    color: '#fff',
    height: '15rem',
    width: '15rem',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 1rem 0.5rem rgba(0, 0, 0, 0.2)',
  },
  overlay: {
    fontSize: '12px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Mantener el fondo semitransparente
    position: 'absolute',
    bottom: 0,
    left: 0, // Asegura que el overlay inicie desde el lado izquierdo
    width: '100%', // Hace que el overlay cubra todo el ancho
    height: '40%', // Ajusta la altura (puedes modificar este valor)
    padding: '0.5 rem',
    display: 'flex', // Para centrar el contenido
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box', // Asegura que el padding no desborde el contenedor
  },
};
//STYLES productos

export default Index;