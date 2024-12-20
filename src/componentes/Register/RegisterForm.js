import React, { useState } from 'react';
import axios from 'axios';
import '../Login/LoginForm.css'; // Reutiliza los estilos de LoginForm.css
import { FaUserAlt, FaLock } from "react-icons/fa";

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        username,
        password,
      });

      setSuccess('Registro exitoso. ¡Ahora puedes iniciar sesión!');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error en el registro:', error.response?.data || error.message);
      setError('Error al registrar el usuario.');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        
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
        
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirmar Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <button type="submit">Registrarse</button>
        <div className="register-link">
          <p>¿Ya tienes una cuenta? <a href="/">Inicia sesión aquí</a></p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
