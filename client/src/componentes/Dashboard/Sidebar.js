import { Link } from "react-router-dom"

export default function Sidebar(){
    return(
        <ul>
            <li>
                <Link to='/resumen'>Resumen</Link>
            </li>
            <li>
                <Link to='/recordatorios'>Recordatorios</Link>
            </li>
            <li>
                <Link to='/historial'>Historial</Link>
            </li>
            <li>
                <Link to='/algo'>Algo</Link>
            </li>
        </ul>
    )
}