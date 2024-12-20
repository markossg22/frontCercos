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
        <h1>Poder Disuasivo</h1>
        <h2>en cualquier condición climática</h2>
        <div className="carousel">
          <img src={images[currentSlide].src} alt="Taza" className="carousel-image" />
          <div className="carousel-text">{images[currentSlide].text}</div>
        </div>
        <h2>ELIJA TRANQUILIDAD!</h2>
        <h3>Exija productos eléctricamente seguros</h3>
        <p>Desde la fabricación hasta la instalación llave en mano, ALARI 3 le da seguridad. La gama de productos y accesorios exclusivos ALARI 3 para la construccion de los cercos de seguridad son desarrollados y producidos bajo las mas estrictas normas internacionales de seguridad eléctrica.</p>
        <img className='imgs'
          src="/media/PREVENTION1.jpg"
          alt="Prevention"
        />
        <h2>¿Para qué arriesgarse?</h2>
        <h3>Certificamos por su Seguridad!</h3>
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
    { src: '/media/PREVENTION3.jpg', text: 'Las Mejores Tazas de Tucumán' },
    { src: '/media/PREVENTION4.jpg', text: 'Calidad Asegurada' },
    { src: '/media/PREVENTION5.jpg', text: 'Variedad de modelos' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  // fin de carrusel

  return (
    <div className="grid-container">
      <header className="header">
        <img
          src="/media/PREVENTION.svg"
          alt="Logo Prevention"
        />
        </header>
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
      <img
          src="/media/Sello.svg"
          alt="Logo Prevention"
        />
    </nav>
      <main className="content">
      {renderView()}
     </main>
      <footer className="footer">Pie de Página</footer>
    </div>
  );
};

export default Inicio;