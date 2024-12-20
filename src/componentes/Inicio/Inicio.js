import React, { useEffect, useState } from 'react';
import QuienesSomos from '../QuienesSomos/QuienesSomos.js';
import Productos from '../Productos/Productos.js';
import DondeEstamos from '../DondeEstamos/DondeEstamos.js';
import Carrito from '../Carrito/Carrito.js';
import LoginForm from '../Login/LoginForm.js';
import RegisterForm from '../Register/RegisterForm.js';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import './Inicio.css';

const Inicio = () => {

  const cld = new Cloudinary({ cloud: { cloudName: 'dehmb7i5p' } });

  const Mail = () => {
    const img = cld.image('pps/IconoMail2')
    .format('auto')
    .quality('auto')
    .toURL();
    return <img src={img} alt="Mail" />;
  };

  const Derec = () => {
    const img = cld.image('pps/IconoDerechos2')
    .format('auto')
    .quality('auto')
    .toURL();
    return <img src={img} alt="Derechos" />;
  };

  const Tel = () => {
    const img = cld.image('pps/IconoTel2') 
    .format('auto')
    .quality('auto')
    .toURL();
    return <img src={img} alt="Tel" />;
  };

  const Sello = () => {
    const img = cld.image('pps/sello')
    .format('auto')
    .quality('auto')
    .toURL();
    return <img src={img} alt="Sello" />;
  };

  const PREVENTION = () => {
    const img = cld.image('pps/PREVENTION')
    .format('auto')
    .quality('auto')
    .toURL();
    return <img src={img} alt="PREVENTION" />;
  };

  const PREVENTIONN = () => {
    const img = cld.image('pps/PREVENTIONN')
    .format('auto')
    .quality('auto')
    .resize(auto().height(500))
    .toURL();
    return <img src={img} alt="PREVENTION1" />;
  };

  const [currentView, setCurrentView] = useState('login'); // Estado para la vista actual

  const images = [
    { 
      publicId: 'pps/PREVENTION3', 
      text: 'Seguridad sobre todo' 
    },
    { 
      publicId: 'pps/PREVENTION4', 
      text: 'Calidad Asegurada' 
    },
    { 
      publicId: 'pps/PREVENTION9', 
      text: 'Variedad de modelos' 
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  const renderView = () => {
    switch (currentView) {
      case 'inicio':
        return (
      <main className="content">
        <h1>Poder Disuasivo</h1>
        <h2>en cualquier condición climática</h2>

        <div className="carousel">
        <AdvancedImage 
          cldImg={cld.image(images[currentSlide].publicId)
            .format('auto')
            .quality('auto')
             
            } 
          alt={images[currentSlide].text} 
          className="carousel-image" 
        />
        <div className="carousel-text">{images[currentSlide].text}</div>
        </div>  
        
        <h2>ELIJA TRANQUILIDAD!</h2>
        <h3>Exija productos eléctricamente seguros</h3>
        <p className='text'>Desde la fabricación hasta la instalación llave en mano, ALARI 3 le da seguridad. La gama de productos y accesorios exclusivos ALARI 3 para la construccion de los cercos de seguridad son desarrollados y producidos bajo las mas estrictas normas internacionales de seguridad eléctrica.</p>
        <div className='imgs'>
          <PREVENTIONN/>
        </div>
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

  return (
    <div className="grid-container">
      <header className="header">
        <PREVENTION/>
        </header>
       
        
      <nav className="menu">
      <button onClick={() => setCurrentView('login')} className="menu-button">
           CUENTA
      </button>
      <button onClick={() => setCurrentView('inicio')} className="menu-button">
          INICIO
      </button>
      <button onClick={() => setCurrentView('quienes-somos')} className="menu-button">
          ¿POR QUÉ ELEGIRNOS?
      </button>
      <button onClick={() => setCurrentView('productos')} className="menu-button">
          PRODUCTOS
      </button>
      <button onClick={() => setCurrentView('donde-estamos')} className="menu-button">
          LOCACIÓN
      </button>
      <button onClick={() => setCurrentView('carrito')} className="menu-button">
          CARRITO
      </button>
       <Sello />
    </nav>
      <main className="content">
      {renderView()}
     </main>
      <footer className="footer">

        <div className='footericons'>
          <Tel/>
          <p>Cel: +54(0381) 156 662-600</p>
        </div>

        <div className='footericons'>
          <Derec/>
          <p>2024.Prevention.Todos los derechos reservados ®</p>
        </div>
       
        <div className='footericons'>
        <Mail/>
        <p>prevention.se1@gmail.com</p>
        </div>
        
      </footer>
    </div>
  );
};

export default Inicio;