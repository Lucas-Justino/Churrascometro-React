import "./App.css";
import {
  BrowserRouter as Router,
  Routes as RoutesDom,
  Route,
} from "react-router-dom";
import Formulario from "./pages/Formulario/formulario";
import Home from "./pages/Home/home";
// import Navbar from "./components/Navbar/navbar";
import Start from "./pages/Start/start";
import EditarFormulario from "./pages/EditarFormulario/editarFormulario";
import Testando from "./hora";
import { ChurrascoProvider } from "./context/user.context";

function App() {
  return (
    <ChurrascoProvider>
      <Router>
        <RoutesDom>
          <Route path="/start" element={<Start />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Start />} />
          <Route path="testando" element={<Testando />} />
          <Route
            path="/editar/:id"
            Component={EditarFormulario}
            element={<EditarFormulario />}
          />
          {/* <Route path="/editar" element={<Formulario />} /> */}
          {/* <Route path="/navegacao" element={<Navbar/>} /> */}
        </RoutesDom>
      </Router>
    </ChurrascoProvider>
  );
}

export default App;
