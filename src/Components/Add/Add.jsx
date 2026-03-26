import React from 'react'
import './Add.css'

const Add = ({slug,columns,setOpen}) => {
  return (
    <div className='add'>
        <div className="modal">
            <span className='close' onClick={()=>setOpen(false)}>X</span>
            <h1>Add new {slug}</h1>
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
            }}>
                {columns.filter(item=>item.filter !== "id"&&item.filter !== "avatar")
                .map(column=>(
                    <div className="item">
                        <label htmlFor="">{column.headerName}</label>
                        <input type={column.type} placeholder={column.field}/>
                    </div>
                ))}
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add