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
    
    const {user} = useContext(AuthContext)
    const [gasto, setGasto] = useState({})

    const handleGasto = ({target}) => {
        const {name:property, value} = target;
        gasto[property] = value;
        setGasto({...gasto})
    };

    const registrarGasto = async() => {
        try {
            console.log(gasto, user)
            const respuesta = await axios.post("http://localhost:3001/gastos", {gasto, user})
            if(respuesta.status == 200){
                alert('la transacción ヽ(・∀・)ﾉ')
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
                            label="Titulo"
                            type="text"
                            name="titulo"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={gasto.titulo}
                            onChange={handleGasto}
                            // value={chauchera.dinero}
                            // onChange={handleChauchera}
                        />
                        </FormControl>
                        </Grid>
                <Grid item xs={2}>
                    <FormControl>
                    <TextField
                        id="outlined-number"
                        label="Dinero del gasto"
                        type="number"
                        name="dinero"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={gasto.dinero}
                        onChange={handleGasto}
                    />
                </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Chauchera</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gasto.nombre}
                        label="Chauchera"
                        name="chaucheraGasto"
                        onChange={handleGasto}
                    >
                        <MenuItem value={'deudas'}>Deudas</MenuItem>
                        <MenuItem value={'ahorros'}>Ahorros</MenuItem>
                        <MenuItem value={'alimentos'}>Alimentos</MenuItem>
                        <MenuItem value={'otros'}>Otros</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={registrarGasto}>Enviar</Button>
                </Grid>
            </Grid>
        );
}
