import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Doughtnut(props){
    const {balance_ahorros, balance_alimentos, balance_deudas, balance_otros} = props.datosUsuario || {}
    console.log(props)
    const data = {
        labels: ['Ahorros', 'Deudas', 'Alimentos', 'Otros'],
        datasets: [
          {
            label: '# of Votes',
            data: [balance_ahorros, balance_deudas, balance_alimentos, balance_otros],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ]
    }
    const options = {
        maintainAspecRatio: false,
        // responsive: true,
        plugins: {
          title:{
            display: true,
            text: 'Chauchera Mensual',
            font: {
              size:34
            },
            padding:{
                top:30,
                bottom:30
            },
            responsive:true,
            animation:{
                animateScale: true,
                          }
          },
          legend: {
            display: false,
            position: "bottom"
          },
        },
      };
    return(
        <Doughnut data={data} 
        width={null}
        height={null}
        options={
            options
        }
        />
    )
}