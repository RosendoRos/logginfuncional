import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function login() { // Cambia el nombre de la función a minúsculas
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      setMessage(response.data.message);
      // Si la solicitud fue exitosa, redirigir al usuario a la página de inicio
      if (response.status === 200) {
        navigate('/home');
      }
    } catch (error) {
      setMessage('Credenciales inválidas');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <p>{message}</p>
    </div>
  );
}

export default login; // Cambia el nombre de la exportación a minúsculas
