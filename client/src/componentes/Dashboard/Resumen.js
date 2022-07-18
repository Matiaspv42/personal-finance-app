import { Grid } from "@mui/material"
import Doughtnut from "./Resumen/Graficos/Doughnut"
import './resumen.css'
import { Box } from "@mui/system"
export default function Resumen(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1}>
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
                    xs=4
                </Grid>
                <Grid item xs={4}sx={{
                    // backgroundColor: '#F6FBF8'
                }}>
                    xs=4
                </Grid>
                <Grid item xs={8}sx={{
                    // backgroundColor: '#F6FBF8'
                }}>
                    xs=8
                </Grid>
            </Grid>
        </Box>
    )
}