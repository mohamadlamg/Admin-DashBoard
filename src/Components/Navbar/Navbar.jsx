import React from 'react'
import './Navbar.css'
import tom from '/tom.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <div className="logo">
          <h1>
            Admin DashBoard 📊
          </h1>
        </div>

        <div className="nav-items">
          <ul className='nav-items-list'>
            <li>
              <a href="#">
                🔍
              </a>
            </li>

            <li>
              <a href="#" id='notification'>
                🔔
              </a>
            </li>

            <li>
              <a href="" id='photo'>
                <img src={tom} alt="" />
              </a>
            </li>

            <li>
              <a href="#" id='nom'>
                Mohamadou
              </a>
            </li>

            <li>
              <a href="#">
                ⚙️
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar