import { NavLink } from "react-router-dom"
import ImageHeader from './Saly-1.png'

import './header.css' 

export default function Header(){
    return(
        <div className="header">
            <img src={ImageHeader} alt="" />
            <div className="headerContent">
                <div className="headerText">
                    <h1>Lleva tus cuentas al día</h1>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <NavLink to="/register"><button className='registrationButton'>Registrar</button></NavLink>
                </div>
            </div>
        </div>
    )
}