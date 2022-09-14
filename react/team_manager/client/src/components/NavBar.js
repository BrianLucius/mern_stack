import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="container">
            <h4>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item border-0"><Link to="/players/list">Manage Players</Link></li>
                    <li className="list-group-item border-0">|</li>
                    <li className="list-group-item border-0"><Link to="/status/game/1" state={{gameId: 1}}>Manage Player Status</Link></li>
                </ul>
            </h4>
        </div>
    )
}

export default NavBar;