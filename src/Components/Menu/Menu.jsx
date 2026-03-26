import React from 'react'
import Users from '../../Pages/Users/Users'
import './Menu.css'
import {Link} from 'react-router-dom'
import { menu } from '../../data'

const Menu = () => {
  return (
    <>
      {menu.map((item)=>(
        <div className="item">
          <span className='titre' key={item.id}>{item.title}</span>
          
          
          {item.listItems.map((listItem)=>{
             const Icon = listItem.icon;
            
            return(
           
            
            <a href="#" className='listItems' key={listItem.id}>
              <Link to={listItem.url}>
                <Icon size={14} /> {listItem.title}
              </Link>
               </a>
          )})}

          
          
        </div>

      ))}
    </>

      

      
  )
}

export default Menu