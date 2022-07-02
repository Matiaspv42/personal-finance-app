import { NavLink } from "react-router-dom"
import ImageHeader from './Saly-1.png'

import './header.css' 

export default function Header(){
    return(
        <div className="header">
            <img src={ImageHeader} alt="" />
            <h1>Lleva tus cuentas al día</h1>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <NavLink to="/register" className='registrationButton'>Registrar</NavLink>
        </div>
    )
}