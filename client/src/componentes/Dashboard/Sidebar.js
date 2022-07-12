import { NavLink } from "react-router-dom"


export default function Sidebar(){

    return(
             <ul>
                <li>
                    <NavLink to='resumen'
                    style={({ isActive }) => ({ color: isActive ? "none" : "blue" })}
                    >Resumen</NavLink>
                </li>
                <li>
                    <NavLink to='recordatorios'
                    style={({ isActive }) => ({ color: isActive ? "none" : "blue" })}
                    >Recordatorios</NavLink>
                </li>
                <li>
                    <NavLink to='historial'
                    style={({ isActive }) => ({ color: isActive ? "none" : "blue" })}
                    >Historial</NavLink>
                </li>
                {/* <li>
                    <Link to='algo'>Algo</Link>
                </li> */}
            </ul>
    )
}