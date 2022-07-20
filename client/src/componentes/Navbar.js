import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import './navbar.css'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/"><AccountBalanceWalletIcon fontSize="large"/></NavLink>
            </div>
            <div className="options">
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/login"><Button variant="contained" style={{
                    padding: '5px 7px',
                    backgroundColor:'#DA6A60',
                    borderRadius: '7.5px',
                }}>Iniciar Sesión</Button></NavLink>
            </div>
            
        </nav>
    )
}