import React from 'react'
import './User.css'
import Single from '../../Components/Single/Single'
import { singleUsers } from '../../data'
import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  const user = singleUsers.find(u => u.id === parseInt(id))

  if (!user) return <div>Utilisateur introuvable</div>

  return (
    <div>
      <Single {...user} />
    </div>
  )
}

export default User