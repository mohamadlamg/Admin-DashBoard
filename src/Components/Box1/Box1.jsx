import React from 'react'
import './Box1.css'
import { topDealUsers } from '../../data'
import { Link } from 'react-router-dom'

const medals = ['🥇', '🥈', '🥉']
const maxAmount = Math.max(...topDealUsers.map(u => u.amount))

const Box1 = () => {
  return (
    <div className='box1'>
      <h2>Meilleurs Clients</h2>
      <div className="info-client">
        {topDealUsers.map((user, index) => (
          <Link to={`/users/${user.id}`} className='b1' key={user.id}>

            <div className="rank">
              {index < 3 ? medals[index] : `#${index + 1}`}
            </div>

            <div className="nom-client">
              <span className='nom'>
                <img src={user.photo} alt="" />
                {user.username}
              </span>
              <span className='email'>{user.email}</span>
            </div>

            <div className="right-side">
              <div className="montant-client">{user.amount.toLocaleString()} </div>
              
              <span className={`badge ${user.status === 'active' ? 'active' : 'inactive'}`}>
                {user.status === 'active' ? 'Actif' : 'Inactif'}
              </span>
            </div>

          </Link>
        ))}
      </div>
    </div>
  )
}

export default Box1