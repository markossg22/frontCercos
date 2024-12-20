import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Importar GoogleMap y Marker


const Index = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Coordenadas
  const location = {
    lat: -26.8326, // Latitud
    lng: -65.1993, // Longitud
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
      <main className="content">
        <h1>Vista Donde Estamos</h1>
        <div className="carousel">
          <img src={images[currentSlide].src} alt="Taza" className="carousel-image" />
          <div className="carousel-text">{images[currentSlide].text}</div>
        </div>
        <div className="map-container">
          <LoadScript googleMapsApiKey="TU_API_KEY_GOOGLE_MAPS">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={location}
              zoom={14}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        </div>
        <h1>Pronto nuevas ubicaciones</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit at potenti mauris diam, vestibulum duis odio sagittis ad egestas cras fames pulvinar tristique feugiat nulla, blandit mattis id viverra placerat maecenas sem lobortis suspendisse laoreet. Ac posuere dis tristique nullam nunc vel potenti erat, enim bibendum cursus orci a faucibus phasellus, platea porta sed praesent lobortis nisi at. Facilisis himenaeos iaculis orci mauris id vulputate aliquam nibh enim, dis egestas fusce imperdiet torquent leo neque quis ullamcorper, dui vestibulum class fermentum lobortis natoque condimentum fames.</h3>
     </main>
  );
};

export default Index;