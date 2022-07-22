import React, { useState } from "react";
import './recordatorios.css'
// import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";
import { FormGroup, FormControlLabel, Checkbox, Button, Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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
    const [selectedDate, handleDateChange] = useState(new Date());
    const [value, setValue] = React.useState(new Date());
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
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
            <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Fecha para tu recordatorio"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
            />
            <FormGroup>
                <FormControlLabel control={<Checkbox
                checked={checked}
                color="success"
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />} label="Email" />
                {/* <FormControlLabel control={<Checkbox
                checked={checked}
                color="success"
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />} label="Notificación" /> */}
            </FormGroup>
            <Button variant="contained">Agregar</Button>
            </div>

            <div className="tableRecordatorios">
                <h3>Ultimos recordatorios</h3>
                <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
                </Box>
            </div>
        </div>
    )
}