import { Grid } from "@mui/material"
import Doughtnut from "./Resumen/Graficos/Doughnut"
import AreaChart from "./Resumen/Graficos/AreaChart"
import './resumen.css'
import { Box } from "@mui/system"
import { RadarChart } from "./Resumen/Graficos/RadarChart"
import UltimosRecordatorios from "./Resumen/UltimosRecodatorios"
export default function Resumen(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item xs={6} sx={{
                    // backgroundColor: '#F6FBF8'
                }}>
                    <div className="DoughnutCard">
                         <Doughtnut/>
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
                        <Grid item xs={12}>
                            <div className="AreaChartCard">
                                <AreaChart/>
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