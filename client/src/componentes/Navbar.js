import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import './navbar.css'
import AuthContext from "../AuthContext";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


export default function Navbar(){
    const {token, setToken} = useContext(AuthContext)

    const cerrarSesion = () =>{
        setToken('')
    }
    return(
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/"><AccountBalanceWalletIcon fontSize="large"/></NavLink>
            </div>
            <div className="options">
                {!token && <NavLink to="/login"><Button variant="contained" style={{
                    padding: '5px 7px',
                    backgroundColor:'#DA6A60',
                    borderRadius: '7.5px',
                }}>Iniciar Sesión</Button></NavLink>}
                {
                    token && <NavLink to="/"><Button variant="contained" style={{
                        padding: '5px 7px',
                        backgroundColor:'#DA6A60',
                        borderRadius: '7.5px',
                    }}
                        onClick={cerrarSesion}
                    >Cerrar Sesión</Button></NavLink>
                }
            </div>
            
        </nav>
    )
}