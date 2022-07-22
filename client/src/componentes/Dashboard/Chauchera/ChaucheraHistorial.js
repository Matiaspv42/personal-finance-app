import { Box } from "@mui/system"
import { DataGrid } from "@mui/x-data-grid"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../../../AuthContext";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'categoria_emisora',
      headerName: 'Emisor',
      width: 150,
      editable: false,
    },
    {
      field: 'categoria_destino',
      headerName: 'Receptor',
      width: 150,
      editable: false,
    },
    {
      field: 'cantidad_dinero',
      headerName: 'Monto',
      type: 'number',
      width: 110,
      editable: false,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
    {
      field: 'fecha',
      headerName: 'Fecha',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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

export default function ChaucheraHistorial(){
  const {user} = useContext(AuthContext)
  console.log(user)
  const [transferenciasData, setData] = useState([])
    // const getTransferencias = async () =>{
    //   const data = await axios.get("http://localhost:3001/transferencias")
    //   const transferencias = data.data
    //   console.log(data)
    //   setData([...data.data])
    //   console.log(transferenciasData)
    // }
    useEffect( async () => { 
      const data = await axios.get(`http://localhost:3001/transferencias?id=${user.id}`)
      setData([...data.data])
    },[])

    console.log(transferenciasData)
    return(
        <Box sx={{ height: 290, width: '100%' }}>
            <DataGrid
                rows={transferenciasData}
                columns={columns}
                pageSize={transferenciasData.length > 3 ? 3:transferenciasData.length}
                rowsPerPageOptions={[3]}
            />
        </Box>
    )
}