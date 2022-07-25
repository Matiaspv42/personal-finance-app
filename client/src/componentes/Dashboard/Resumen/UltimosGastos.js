import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import AuthContext from '../../../AuthContext';




export default function UltimosRecodatorios(){
  const {user} = useContext(AuthContext)
    const [gastosHistorial, setGastosHistorial] = useState([])
    useEffect( async () => { 
      const gastosHistorial = await axios.get(`http://localhost:3001/gastos?id=${user.id}&limit=3`)
      setGastosHistorial([...gastosHistorial.data.slice(0,3)])
    },[user])
    console.log(gastosHistorial)
    return(
        <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Ultimos Gastos</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gastosHistorial.map((gasto) => (
            <TableRow
              key={gasto.titulo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {gasto.titulo}
              </TableCell>
              <TableCell align="right">{new Date(`${gasto.fecha}`).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}