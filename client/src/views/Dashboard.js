import './dashboard.css'

import Sidebar from "../componentes/Dashboard/Sidebar"
import { Outlet } from 'react-router-dom'

export default function Dashboard(){
    return(
        <div className="dashboard">
            <div className='sidebar'>
                <Sidebar/>
            </div>
            <div className='innerContentDashboard'>
                <Outlet/>
            </div>
                
        </div>
    )
}