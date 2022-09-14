import React from 'react'
import { Link } from 'react-router-dom';

const NavBarManagePlayers = () => {
    return (
        <div className="mb-4">
            <h5>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item border-0"><Link to="/players/list">List</Link></li>
                    <li className="list-group-item border-0">|</li>
                    <li className="list-group-item border-0"><Link to="/players/addplayer">Add Player</Link></li>
                </ul>
            </h5>
        </div>
    )
}

export default NavBarManagePlayers