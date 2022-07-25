import { Grid } from "@mui/material"
import Doughtnut from "./Resumen/Graficos/Doughnut"
import AreaChart from "./Resumen/Graficos/AreaChart"
import './resumen.css'
import { Box } from "@mui/system"
import { RadarChart } from "./Resumen/Graficos/RadarChart"
import UltimosRecordatorios from "./Resumen/UltimosRecodatorios"
import UltimosGastos from "./Resumen/UltimosGastos"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import AuthContext from "../../AuthContext"
export default function Resumen(){
    
    const {user} = useContext(AuthContext)
    const [datosUsuario, setDatosUsuario] = useState([])
    useEffect( async () => { 
      const data = await axios.get(`http://localhost:3001/usuarios?id=${user.id}`)
      setDatosUsuario([...data.data])
      
    },[user])
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item xs={6} sx={{
                    // backgroundColor: '#F6FBF8'
                }}>
                    <div className="DoughnutCard">
                         <Doughtnut datosUsuario={datosUsuario[0]}/>
                    </div>
                </Grid>
                <Grid item xs={6} sx={{
                    // backgroundColor: '#F6FBF8'
                }}>
                    <Grid container rowSpacing={1} >
                        <Grid item xs={12}>
                            <div className="UltimasTransacciones">
                                <UltimosRecordatorios/>
                            </div>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <div className="AreaChartCard">
                                <AreaChart/>
                            </div>
                        </Grid> */}
                        <Grid item xs={12}>
                            <div className="AreaChartCard">
                                <UltimosGastos/>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid item xs={4}sx={{
                    // backgroundColor: '#F6FBF8'
                }}>
                    <div className="RadarChartCard">
                        <RadarChart/>
                    </div>
                </Grid>
                <Grid item xs={8}sx={{
                    // backgroundColor: '#F6FBF8'
                }}>
                    xs=8
                </Grid> */}
            </Grid>
        </Box>
    )
}