import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/Registro';
import Dashboard from './views/Dashboard';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Registro/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
