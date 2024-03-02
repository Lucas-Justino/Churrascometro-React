import './App.css'
import { BrowserRouter as Router, Routes as RoutesDom, Route } from 'react-router-dom';
import Formulario from './components/Formulario/formulario'
import Home from './pages/Home/home';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <Router>
      <RoutesDom>
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/editar" element={<Formulario />} /> */}
        {/* <Route path="/navegacao" element={<Navbar/>} /> */}
      </RoutesDom>
    </Router>
  );
}

export default App
