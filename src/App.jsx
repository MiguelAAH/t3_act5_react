import Saludo from './components/Saludo';
import TarjetaUsuario from './components/Tarjetausuario';
import Contador from './components/Contador';
import ListaMaterias from './components/Listamaterias';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Act5. Introducción a React </h1>

      {/* a) Componente simple */}
      <Saludo />

      {/* b) Componente con Props */}
      <TarjetaUsuario nombre="Miguel" apellido="Alonso Heredia" edad={22} materia="Programación web con React" grupo="7SE" />

      {/* c) Componente con Estado */}
      <Contador />

      {/* d) Lista dinámica */}
      <ListaMaterias />
    </div>
  );
}

export default App;