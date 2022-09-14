import React from 'react'
import { Link } from 'react-router-dom';

const NavBarManageGames = () => {
    return (
        <div className="d-flex justify-content-center">
            <h5>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item border-0"><Link to="/status/game/1" state={{gameId: 1}}>Game 1</Link></li>
                    <li className="list-group-item border-0">|</li>
                    <li className="list-group-item border-0"><Link to="/status/game/2" state={{gameId: 2}}>Game 2</Link></li>
                    <li className="list-group-item border-0">|</li>
                    <li className="list-group-item border-0"><Link to="/status/game/3" state={{gameId: 3}}>Game 3</Link></li>
                </ul>
            </h5>
        </div>
    )
}

export default NavBarManageGames