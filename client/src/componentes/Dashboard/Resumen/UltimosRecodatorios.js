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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function UltimosRecodatorios(){
  const {user} = useContext(AuthContext)
    const [recordatoriosHistorial, setRecodatorioHistorial] = useState([])
    useEffect( async () => { 
      const recordatoriosHistorial = await axios.get(`http://localhost:3001/recordatorios?id=${user.id}&limit=3`)
      setRecodatorioHistorial([...recordatoriosHistorial.data.slice(0,3)])
    },[user])
    return(
        <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Recordatorio</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recordatoriosHistorial.map((recordatorio) => (
            <TableRow
              key={recordatorio.titulo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {recordatorio.titulo}
              </TableCell>
              <TableCell align="right">{new Date(`${recordatorio.fecha}`).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}