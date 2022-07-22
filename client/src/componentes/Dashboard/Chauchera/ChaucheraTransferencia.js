import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {Grid} from '@mui/material';
import AuthContext from '../../../AuthContext';
import axios from 'axios';

export default function ChaucheraTransferencia () {
    const {user} = useContext(AuthContext)
    const [transferencia, setTransferencia] = useState({});

    const handleTransferencia = ({target}) => {
        const {name:property, value} = target;
        transferencia[property] = value;
        setTransferencia({...transferencia})
    };

    const mandarTransferencia = async() => {
        try {
            console.log(transferencia)
            if(transferencia.envia == transferencia.recibe){
                alert('La chauchera emisor no puede ser la chauchera receptor \n ┐(￣ヘ￣;)┌')
            }else{
                const respuesta = await axios.post("http://localhost:3001/transferencias", {transferencia, user})
                if(respuesta.status == 200){
                    alert('la transferencia ha sido recibida ヽ(・∀・)ﾉ')
                }else{
                    alert('parece que hubo un problema 	(｡╯︵╰｡)')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <Grid container spacing={2}>
            <Grid item xs={2}>
                    <FormControl>
                    <TextField
                        id="outlined-number"
                        label="Dinero a transferir"
                        type="number"
                        name="dinero"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={transferencia.dinero}
                        onChange={handleTransferencia}
                    />
                </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Envía</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={transferencia.envia}
                            name="envia"
                            // label="Age"
                            onChange={handleTransferencia}
                        >
                            <MenuItem value={'deudas'}>Deudas</MenuItem>
                            <MenuItem value={'ahorros'}>Ahorros</MenuItem>
                            <MenuItem value={'alimentos'}>Alimentos</MenuItem>
                            <MenuItem value={'otros'}>Otros</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Recibe</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={transferencia.recibe}
                            name="recibe"
                            // label="Age"
                            onChange={handleTransferencia}
                        >
                            <MenuItem value={'deudas'}>Deudas</MenuItem>
                            <MenuItem value={'ahorros'}>Ahorros</MenuItem>
                            <MenuItem value={'alimentos'}>Alimentos</MenuItem>
                            <MenuItem value={'otros'}>Otros</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={mandarTransferencia}>Enviar</Button>
                </Grid>
            </Grid>
    )
}