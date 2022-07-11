import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/Registro';
import Dashboard from './views/Dashboard';
import Navbar from './componentes/Navbar';
import Resumen from './componentes/Dashboard/Resumen';
import Recordatorios from './componentes/Dashboard/Recordatorios';
import Historial from './componentes/Dashboard/Historial';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Registro/>} />
          <Route path='dashboard' element={<Dashboard/>} >
            <Route path='resumen' element={<Resumen/>} />
            <Route path='recordatorios' element={<Recordatorios/>} /> 
            <Route path='historial' element={<Historial/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
