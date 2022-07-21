import { NavLink } from "react-router-dom"
import ImageHeader from './Saly-1.png'
import Button from '@mui/material/Button';
import './header.css' 

export default function Header(){
    return(
        <div className="header">
            <img src={ImageHeader} alt="" />
            <div className="headerContent">
                <div className="headerText">
                    <h1>Chauchera</h1>
                    <h3>Lleva tus finanzas personales y cuentas al día</h3>
                    <NavLink to="/register"><Button variant="contained" size="small" style={{
                        padding: '5px 7px',
                        backgroundColor: '#F0BF00',
                        borderRadius: '7.5px',
                    }}>Registrate</Button></NavLink>
                </div>
            </div>
        </div>
    )
}