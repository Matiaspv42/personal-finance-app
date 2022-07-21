import { useState } from 'react';
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
import Chauchera from './componentes/Dashboard/Chauchera'
import ProtectedRoute from './ProtectedRoute'
import AuthContext from './AuthContext';

function App() {
  const [token, setToken] = useState('123');
  const [login, setLogin] = useState(false)

  const [user, setUser] = useState({});

  return (
        <div className="App">
        <AuthContext.Provider value={{token, setToken, login, setLogin, user, setUser}}>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='login' element={<Login/>} />
              <Route path='register' element={<Registro/>} />
              <Route element={<ProtectedRoute user={user} />}>
                <Route path='dashboard' element={<Dashboard/>} >
                  <Route path='resumen' element={<Resumen/>} />
                  <Route path='chauchera' element={<Chauchera/>} />
                  <Route path='recordatorios' element={<Recordatorios/>} /> 
                  <Route path='historial' element={<Historial/>} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
  );
}

export default App;
