import "./App.css";
import {
  BrowserRouter as Router,
  Routes as RoutesDom,
  Route,
} from "react-router-dom";
import Formulario from "./pages/Formulario/formulario";
import EditarFormulario from "./pages/EditarFormulario/editarFormulario";
import { ChurrascoProvider } from "./context/user.context";
import Lista from "./pages/Lista/lista";
import Home from "./pages/Home/home";

function App() {
  return (
    <ChurrascoProvider>
      <Router>
        <RoutesDom>
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/editar/:id"
            Component={EditarFormulario}
            element={<EditarFormulario />}
          />
        </RoutesDom>
      </Router>
    </ChurrascoProvider>
  );
}

export default App;
