import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Index = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //carrusel

  const images = [
    { src: '/media/PREVENTION7.jpg', text: 'Las Mejores Tazas de Tucumán' },
    { src: '/media/PREVENTION9.jpg', text: 'Calidad Asegurada' },
    { src: '/media/PREVENTION8.jpg', text: 'Variedad de modelos' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  // fin de carrusel

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
      <main className="content">
        <h1>¿Por que elegirnos?</h1>
        <div className="carousel">
          <img src={images[currentSlide].src} alt="Taza" className="carousel-image" />
          <div className="carousel-text">{images[currentSlide].text}</div>
        </div>
        <h1>Las 8 razones ALARI</h1>
        <div className='razones'>
        <ul>
          <li><h2>Gran poder disuasivo</h2></li>
          <li><h2>Menor costo por metro instalado</h2></li>
          <li><h2>Deteccion de pre-intrusión</h2></li>
          <li><h2>No requiere instalaciones moviles ni bajo tierra</h2></li>
        </ul>
        <ul>
          <li><h2>Monitoreo local o remoto</h2></li>
          <li><h2>La linea mas cimpleta de accesorios antivandalismo</h2></li>
          <li><h2>Software exclusivo</h2></li>
          <li><h2>Soporte técnico para proyectos</h2></li>
        </ul>
        </div>
     </main>
  );
};

export default Index;