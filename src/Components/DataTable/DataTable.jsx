import React from 'react'
import './DataTable.css'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const DataTable = ({slug,rows,columns}) => {
    const  handleDelete=(id)=>{
        console.log(id+" supprimé")
    }
    const actions= {
    field: 'actions', headerName: 'Actions', width: 70,renderCell:(params)=>{
      return (<div className="action">
        
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/true.jpg" alt="" />
          </Link>
      
        <div className="delete" onClick={()=>handleDelete(params.row.id)}>
          <img src="/ false.jpg" alt="" />
        </div>
      </div>)
    }
  }

  return (
    <div>
        <Box sx={{ width: '100%' }}>
      <DataGrid
      className='datagrid'
        rows={rows}
        autoHeight  
        columns={[...columns,actions]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        showToolbar
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </Box>
    </div>
  )
}

export default DataTable