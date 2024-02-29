import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes as RoutesDom, Route } from 'react-router-dom';
import Formulario from './components/Formulario/formulario'
import Home from './pages/Home/home';

function App() {
  return (
    <Router>
      <RoutesDom>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Formulario />} />
      </RoutesDom>
    </Router>
  );
}

export default App
