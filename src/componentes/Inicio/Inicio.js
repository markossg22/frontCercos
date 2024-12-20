import React, { useEffect, useState } from 'react';
import QuienesSomos from '../QuienesSomos/QuienesSomos.js';
import Productos from '../Productos/Productos.js';
import DondeEstamos from '../DondeEstamos/DondeEstamos.js';
import Carrito from '../Carrito/Carrito.js';
import LoginForm from '../Login/LoginForm.js';
import RegisterForm from '../Register/RegisterForm.js';
import './Inicio.css';

const Inicio = () => {

  const [currentView, setCurrentView] = useState('login'); // Estado para la vista actual

  const renderView = () => {
    switch (currentView) {
      case 'inicio':
        return (
      <main className="content">
        <h1>Vista Inicio</h1>
        <div className="carousel">
          <img src={images[currentSlide].src} alt="Taza" className="carousel-image" />
          <div className="carousel-text">{images[currentSlide].text}</div>
        </div>
        <h1>Las mejores tazas de todo Tucumán</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit at potenti mauris diam, vestibulum duis odio sagittis ad egestas cras fames pulvinar tristique feugiat nulla, blandit mattis id viverra placerat maecenas sem lobortis suspendisse laoreet. Ac posuere dis tristique nullam nunc vel potenti erat, enim bibendum cursus orci a faucibus phasellus, platea porta sed praesent lobortis nisi at. Facilisis himenaeos iaculis orci mauris id vulputate aliquam nibh enim, dis egestas fusce imperdiet torquent leo neque quis ullamcorper, dui vestibulum class fermentum lobortis natoque condimentum fames.</h3>
        </main>
        );
      case 'quienes-somos':
        return <QuienesSomos />;
      case 'productos':
        return <Productos />;
      case 'donde-estamos':
        return <DondeEstamos />;
      case 'carrito':
        return <Carrito />;
      case 'login':
        return <LoginForm />;
      case 'register':
        return <RegisterForm />;
    }
  };

  //carrusel

  const images = [
    { src: 'https://swiperjs.com/demos/images/nature-1.jpg', text: 'Las Mejores Tazas de Tucumán' },
    { src: 'https://swiperjs.com/demos/images/nature-2.jpg', text: 'Calidad Asegurada' },
    { src: 'https://swiperjs.com/demos/images/nature-3.jpg', text: 'Variedad de modelos' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 8000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  // fin de carrusel

  return (
    <div className="grid-container">
      <header className="header">Mundo Tazas</header>
      <nav className="menu">
      <button onClick={() => setCurrentView('login')} className="menu-button">
          Cuenta
      </button>
      <button onClick={() => setCurrentView('inicio')} className="menu-button">
          Inicio
      </button>
      <button onClick={() => setCurrentView('quienes-somos')} className="menu-button">
          ¿Quiénes Somos?
      </button>
      <button onClick={() => setCurrentView('productos')} className="menu-button">
          Productos
      </button>
      <button onClick={() => setCurrentView('donde-estamos')} className="menu-button">
          Donde Estamos
      </button>
      <button onClick={() => setCurrentView('carrito')} className="menu-button">
          Carrito de Compras
      </button>
    </nav>
      <main className="content">
      {renderView()}
     </main>
      <aside className="sidebar">Espacio para publicidad</aside>
      <footer className="footer">Pie de Página</footer>
    </div>
  );
};

export default Inicio;