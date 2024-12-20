import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './componentes/Carrito/CartContext.js';
import Inicio from './componentes/Inicio/Inicio.js';
import QuienesSomos from './componentes/QuienesSomos/QuienesSomos.js';
import Productos from './componentes/Productos/Productos.js';
import DondeEstamos from './componentes/DondeEstamos/DondeEstamos.js';
import Carrito from './componentes/Carrito/Carrito.js';
import LoginForm from './componentes/Login/LoginForm.js';
import RegisterForm from './componentes/Register/RegisterForm.js';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/donde-estamos" element={<DondeEstamos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Register" element={<RegisterForm />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;
