import "./App.css";
import {
  BrowserRouter as Router,
  Routes as RoutesDom,
  Route,
} from "react-router-dom";
import Formulario from "./pages/Formulario/formulario";
import Start from "./pages/Home/home";
import EditarFormulario from "./pages/EditarFormulario/editarFormulario";
import { ChurrascoProvider } from "./context/user.context";
import Lista from "./pages/Lista/lista";

function App() {
  return (
    <ChurrascoProvider>
      <Router>
        <RoutesDom>
          <Route path="/start" element={<Start />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/lista" element={<Lista />} />
          <Route path="/" element={<Start />} />
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
