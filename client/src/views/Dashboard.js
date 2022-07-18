import './dashboard.css'

import Sidebar from "../componentes/Dashboard/Sidebar"
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function Dashboard(){
    return(
        <div className="dashboard">
            <div className='sidebar'>
                <Sidebar/>
            </div>
            <div className='innerContentDashboard'>
                <Box>
                    <Outlet/>
                </Box>
            </div>
        </div>
    )
}