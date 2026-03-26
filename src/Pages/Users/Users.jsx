import {React,useState} from 'react'
import './Users.css'
import DataTable from '../../Components/DataTable/DataTable'
import {userRows} from '../../data'
import Add from '../../Components/Add/Add'

const Users = () => {
  const [open,setOpen] = useState(false)
  const columns = [
  { field: 'id', headerName: 'ID', width: 40 },{
    field: 'avatar', headerName: 'Avatar', width: 60,renderCell:(params)=>{
      return <img src={params.row.img || '/noavatar.jpg'} />
    }
  },
  
  
  { field: 'status', headerName: 'Status', width: 70,type:'boolean' },
  { field: 'email', headerName: 'Email', width: 180,type:'string' },
  { field: 'phone', headerName: 'Phone', width: 110,type:'string' },
  { field: 'createdAt', headerName: 'createdAt', width: 100,type:'string' },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
    editable: true,
  },
];

  return (
    <div className='users'>
      <div className="info">
        <h1>Utilisateurs</h1>
        <button onClick={()=>setOpen(true)}>Ajouter Utilisateur</button>
      </div>
      <div className="data">
        <DataTable slug="users" columns={columns} rows={userRows}/>
        {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
      </div>
    </div>
  )
}

export default Users