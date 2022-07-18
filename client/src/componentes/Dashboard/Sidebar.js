import { NavLink } from "react-router-dom"
import './sidebar.css'

export default function Sidebar(){
    return(
             <div className="sideBar">
                    <NavLink to='resumen'
                     style={({ isActive }) => ({ backgroundColor: isActive ? "#F6FBF8" : "#E7EBF0" })}
                    >Resumen</NavLink>

                    <NavLink to='chauchera'
                    style={({ isActive }) => ({ backgroundColor: isActive ? "#F6FBF8" : "#E7EBF0" })}
                    >Chauchera</NavLink>
    
                    <NavLink to='recordatorios'
                    style={({ isActive }) => ({ backgroundColor: isActive ? "#F6FBF8" : "#E7EBF0" })}
                    >Recordatorios</NavLink>
    
                    <NavLink to='historial'
                    style={({ isActive }) => ({ backgroundColor: isActive ? "#F6FBF8" : "#E7EBF0" })}
                    >Historial</NavLink>

                    
                {/* <li>
                    <Link to='algo'>Algo</Link>
                </li> */}
            </div>
    )
}