import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
       <ul className='nav-bar'>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"about"}>About</Link></li>
        <li><Link to={"players"}>Players</Link></li>
        <li><Link to={"teams"}>Teams</Link></li>
        <li><Link to={"teams/Denver/pink"}>Denver Team</Link></li>
       </ul>
    </div>
  )
}

export default NavBar