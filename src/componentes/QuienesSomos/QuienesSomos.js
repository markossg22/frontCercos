import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const Index = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cld = new Cloudinary({ cloud: { cloudName: 'dehmb7i5p' } });
  //carrusel

  const images = [
    { 
      publicId: 'pps/PREVENTION10', 
      text: 'Seguridad sobre todo' 
    },
    { 
      publicId: 'pps/PREVENTION8', 
      text: 'Calidad Asegurada' 
    },
    { 
      publicId: 'pps/PREVENTION7', 
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

        <h1>Las 8 razones por las que comprar tu cerco eléctrico</h1>
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