import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../AuthContext";
import './recordatorios.css'
// import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import { FormGroup, FormControlLabel, Checkbox, Button, Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {Grid} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'titulo',
      headerName: 'Titulo',
      width: 150,
      editable: true,
    },
    {
      field: 'descripcion',
      headerName: 'Descripcion',
      width: 150,
      editable: true,
    },
    {
      field: 'fecha',
      headerName: 'Fecha',
      type: 'number',
      width: 110,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


export default function Recordatorios(){
    const [fecha, setFecha] = useState(new Date());
    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    const {user} = useContext(AuthContext)
    const [recordatorioData, setRecordatorio] = useState({})
    const handleRecordatorio = ({target}) => {
        const {name:property, value} = target;
        recordatorioData[property] = value;
        setRecordatorio({...recordatorioData})
        console.log(recordatorioData)
    };

    const registerRecordatorio = async () => {
      console.log(fecha, recordatorioData)
      if(recordatorioData?.email != "on"){
        alert('No olvides elegir tu metodo de recordatorio (￢ ￢)')
      }else{
        const respuesta = await axios.post("http://localhost:3001/recordatorios", {recordatorioData, user, fecha})
        if(respuesta.status == 200){
          alert('el recordatorio ha sido recibido (￣▽￣)/')
        }else{
          alert('parece que hubo un problema 	(｡╯︵╰｡)')
        }
      }
    }
    const [recordatoriosHistorial, setRecodatorioHistorial] = useState([])
    useEffect( async () => { 
      const recordatoriosHistorial = await axios.get(`http://localhost:3001/recordatorios?id=${user.id}`)
      setRecodatorioHistorial([...recordatoriosHistorial.data])
    },[])

    // const handleDeposito = async() => {
    //     try {
    //         console.log(chauchera, user)
    //         const respuesta = await axios.post("http://localhost:3001/depositos", {chauchera, user})
    //         if(respuesta.status == 200){
    //             alert('el dinero ha sido recibido ヽ(・∀・)ﾉ')
    //         }else{
    //             alert('parece que hubo un problema 	(｡╯︵╰｡)')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return(
        <div className="recordatorios">
            <div className="formRecodatorios">
            {/* <KeyboardDateTimePicker
                variant="inline"
                ampm={false}
                label="Fecha del recordatorio"
                value={selectedDate}
                onChange={handleDateChange}
                onError={console.log}
                disablePast
                format="dd/MM/yyyy HH:mm"
            /> */}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <FormControl>
                        <TextField
                            id="outlined-number"
                            label="Titulo"
                            type="text"
                            name="titulo"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={recordatorioData.titulo}
                            onChange={handleRecordatorio}
                            // value={chauchera.dinero}
                            // onChange={handleChauchera}
                        />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl>
                        <TextField
                          id="outlined-multiline-static"
                          label="Descripción"
                          name="descripcion"
                          fullWidth
                          multiline
                          rows={4}
                          defaultValue=""
                          value={recordatorioData.descripcion}
                          onChange={handleRecordatorio}
                        />
                     </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Fecha para tu recordatorio"
                  value={fecha}
                  onChange={(newValue) => {
                    setFecha(newValue)}}
                  name="fecha"
                />
                 <FormGroup>
                    <FormControlLabel control={<Checkbox
                 
                    color="success"
                    value={recordatorioData.email}
                    onChange={handleRecordatorio}
                    inputProps={{ 'aria-label': 'controlled' }}
                    name="email"
                    />} label="Email" />
                    {/* <FormControlLabel control={<Checkbox
                    checked={checked}
                    color="success"
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />} label="Notificación" /> */}
                </FormGroup>
                <Button variant="contained" onClick={registerRecordatorio}>Agregar</Button>
                </Grid>
            </Grid>
            
            </div>

            <div className="tableRecordatorios">
                <h3>Ultimos recordatorios</h3>
                <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={recordatoriosHistorial}
                    columns={columns}
                    pageSize={recordatoriosHistorial.length > 5 ? 5:recordatoriosHistorial.length}
                    rowsPerPageOptions={[5]}
                />
                </Box>
            </div>
        </div>
    )
}