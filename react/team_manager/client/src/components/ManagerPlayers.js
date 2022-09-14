import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBarPlayers from './NavBarPlayers';
import ListPlayers from './ListPlayers';
import AddPlayer from './AddPlayer';

const ManagerPlayers = () => {
    return (
      <div className="container border border-3 border-secondary rounded shadow">
      <NavBarPlayers />
          <Routes >
            <Route path="list" element={<ListPlayers />} />
            <Route path="addplayer" element={<AddPlayer />} />
          </Routes>
      </div>
    )
}

export default ManagerPlayers;