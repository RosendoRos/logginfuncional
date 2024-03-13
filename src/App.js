import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login'; // Ajustar la ruta del componente Login
import Register from './components/Register'; // Ajustar la ruta del componente Register
import HomePage from './components/HomePage'; // Ajustar la ruta del componente HomePage

function App() {
  return (
    <Router>
      <div className="container">
        <div className="logo">
          <img src='/img/logo.PNG' alt="Logo de la empresa" />
        </div>
        <h1>Bienvenido a UrbanAgroBot</h1>
        <div>
          <Link to="/login">
            <button>Iniciar Sesión</button>
          </Link>
          <Link to="/register">
            <button>Registrarse</button>
          </Link>
        </div>
        <Routes> {/* Cambiar Switch por Routes */}
          <Route path="/login" element={<Login />} /> {/* Utilizar 'element' en lugar de 'component' */}
          <Route path="/register" element={<Register />} /> {/* Utilizar 'element' en lugar de 'component' */}
          <Route path="/home" element={<HomePage />} /> {/* Utilizar 'element' en lugar de 'component' */}
        </Routes> {/* Cerrar el tag de Routes */}
      </div>
    </Router>
  );
}


export default App;
