import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import NavBarStatus from './NavBarStatus';
import PlayerStatus from './PlayerStatus'

const ManagePlayerStatus = () => {
  const location = useLocation();
  const { gameId } = location.state;

  return (
    <div className="container border border-3 border-secondary rounded">
      <h1 className="text-start">Player Status - Game {gameId}</h1>
      <NavBarStatus/>
          <Routes >
            <Route path="/game/:id" element={<PlayerStatus />} />
          </Routes>
    </div>
  )
}

export default ManagePlayerStatus