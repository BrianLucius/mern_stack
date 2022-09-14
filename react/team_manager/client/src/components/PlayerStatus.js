import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PlayerStatus = () => {
    const [players, setPlayers] = useState();
    const [loaded, setLoaded] = useState(false);
    const [updateToggle, setUpdateToggle] = useState(false);
    const location = useLocation();
    const { gameId } = location.state;
    var playerStatus = "";

    useEffect(() => {
      axios.get("http://localhost:8000/api/players")
        .then((response) => {
          setPlayers(response.data.data);
          setLoaded(true);
        })
        .catch((err) => {console.log("There was an error: ", err)});
    }, [updateToggle, gameId]);

    const handleStatusUpdate = (e, gameId, id) => {
      // console.log("event: ", e.nativeEvent.target.name, "gameId: ", gameId, "playerId: ", id);
      const playerUpdate=(players.filter((player) => player._id === id));
      const playerStatus=({"gameNumber": gameId, "status": e.nativeEvent.target.name});
      playerUpdate[0].playerStatus = [...playerUpdate[0].playerStatus.filter(game => game.gameNumber !== gameId), playerStatus]; 
      // playerUpdate[0].playerStatus = [playerStatus]; 
      // console.log("Updated player: ", playerUpdate[0]);

      axios.put(`http://localhost:8000/api/players/${id}`, playerUpdate[0])
      .then((response) => {
        // console.log(response);
        setUpdateToggle(!updateToggle);})
      .catch((err) => {console.log("There was an error: ", err)});
    }

  return (
    <div className="container mb-5">
          <table className="table table-striped border border-secondary align-middle shadow">
            <thead className="table-primary">
              <tr>
                <th>Player Name</th>
                <th colSpan="3">Actions</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {loaded &&
                players.map((player, index) => {
                  try {
                    playerStatus = Object.entries(player.playerStatus).filter((games)=> games[1].gameNumber===gameId)[0][1].status;
                  } catch (error) {
                    playerStatus = "undecided";
                  }
                  let playingClass, notPlayingClass, undecidedClass = "";
                  switch(playerStatus) {
                  case "playing":
                    playingClass = "btn btn-success";
                    notPlayingClass = "btn btn-outline-danger";
                    undecidedClass = "btn btn-outline-warning";
                    break;
                  case "notPlaying":
                    playingClass = "btn btn-outline-success";
                    notPlayingClass = "btn btn-danger";
                    undecidedClass = "btn btn-outline-warning";
                    break;
                  default:
                    playingClass = "btn btn-outline-success";
                    notPlayingClass = "btn btn-outline-danger";
                    undecidedClass = "btn btn-warning";
                  }
                  return (
                    <tr key={index}>
                      <td>{player.playerName}</td>
                      <td><button className={playingClass} name="playing" onClick={(e)=>{handleStatusUpdate(e, gameId, player._id)}}>Playing</button></td>
                      <td><button className={notPlayingClass} name="notPlaying" onClick={(e)=>{handleStatusUpdate(e, gameId, player._id)}}>Not Playing</button></td>
                      <td><button className={undecidedClass} name="undecided" onClick={(e)=>{handleStatusUpdate(e, gameId, player._id)}}>Undecided</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
      </div>
  )
}

export default PlayerStatus;