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
      // Redirigir o manejar el éxito del login aquí.
    } catch (error) {
      console.error('Error en el login:', error.response?.data || error.message);
      setError('Usuario o contraseña incorrectos');
    }
  };
  