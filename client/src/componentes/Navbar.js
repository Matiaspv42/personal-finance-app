import { NavLink } from "react-router-dom";
import './navbar.css'
export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="options">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/login" className='loginButton'>Iniciar Sesión</NavLink>
            </div>
            
        </nav>
    )
}