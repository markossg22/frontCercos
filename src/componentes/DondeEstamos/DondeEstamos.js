import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Importar GoogleMap y Marker


const Index = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <h1>Donde Encontrarnos</h1>
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
        <h1>Contactanos</h1>
        <h2>CEL: (0381) 156 662-600</h2>
     </main>
  );
};

export default Index;