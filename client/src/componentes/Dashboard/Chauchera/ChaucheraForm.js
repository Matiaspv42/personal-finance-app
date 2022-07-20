import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function ChaucheraForm(){
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
        return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl>
                <TextField
                    id="outlined-number"
                    label="Dinero a depositar"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>
            
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Chauchera</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={'deudas'}>Deudas</MenuItem>
                    <MenuItem value={'ahorros'}>Ahorros</MenuItem>
                    <MenuItem value={'alimentos'}>Alimentos</MenuItem>
                    <MenuItem value={'otros'}>Otros</MenuItem>
                </Select>
            </FormControl>

            <Button variant="contained">Enviar</Button>
        </Box>
        );
}
