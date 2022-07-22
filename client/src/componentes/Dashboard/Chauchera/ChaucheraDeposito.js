import React from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {Grid} from '@mui/material';
import { useState, useContext } from 'react';
import AuthContext from '../../../AuthContext';
export default function ChaucheraForm(){
    
    const {user,chauchera, setChauchera} = useContext(AuthContext)

    const handleChauchera = ({target}) => {
        const {name:property, value} = target;
        chauchera[property] = value;
        setChauchera({...chauchera})
    };

    const handleDeposito = async() => {
        try {
            console.log(chauchera, user)
            const respuesta = await axios.post("http://localhost:3001/depositos", {chauchera, user})
            if(respuesta.status == 200){
                alert('el dinero ha sido recibido ヽ(・∀・)ﾉ')
            }else{
                alert('parece que hubo un problema 	(｡╯︵╰｡)')
            }
        } catch (error) {
            console.log(error)
        }
    }
        return (
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <FormControl>
                    <TextField
                        id="outlined-number"
                        label="Dinero a depositar"
                        type="number"
                        name="dinero"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={chauchera.dinero}
                        onChange={handleChauchera}
                    />
                </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Chauchera</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={chauchera.nombre}
                        label="Chauchera"
                        name="chaucheraDeposito"
                        onChange={handleChauchera}
                    >
                        <MenuItem value={'deudas'}>Deudas</MenuItem>
                        <MenuItem value={'ahorros'}>Ahorros</MenuItem>
                        <MenuItem value={'alimentos'}>Alimentos</MenuItem>
                        <MenuItem value={'otros'}>Otros</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={handleDeposito}>Enviar</Button>
                </Grid>
            </Grid>
        );
}
