import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { FaUserAlt, FaLock } from "react-icons/fa";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState(null); // Estado para el usuario logueado

  // Verificar si el usuario ya está logueado
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Verifica si hay un usuario en localStorage
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser)); // Si hay usuario, lo seteamos en el estado
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        username,
        password,
      });
      
      // Guardar la información del usuario en localStorage
      localStorage.setItem('user', JSON.stringify(response.data)); // Guarda el usuario
      setUserInfo(response.data); // Almacena la información del usuario logueado
      setError('');
      console.log('Login exitoso:', response.data);
    } catch (error) {
      console.error('Error en el login:', error.response?.data || error.message);
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="wrapper">
      {userInfo ? ( // Vista condicional
        <div className="user-info">
          <h1>Bienvenido, {username}</h1>
          <button onClick={() => {
            localStorage.removeItem('user'); // Elimina el usuario del localStorage
            setUserInfo(null); // Elimina el usuario del estado
          }}>Cerrar sesión</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {error && <p className="error-message">{error}</p>}
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Recuérdame
            </label>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>¿Todavía no tenés una cuenta? <a href="/register">Creala aquí</a></p>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
