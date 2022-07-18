import React from 'react';
import  ReactDOM   from 'react-dom';
import App from './App';
import './index.css'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es'
ReactDOM.render( 
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                <App />
        </MuiPickersUtilsProvider>
, document.getElementById('root'))