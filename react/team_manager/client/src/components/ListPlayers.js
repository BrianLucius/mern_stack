import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const ListPlayers = () => {
    const [players, setPlayers] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      axios.get("http://localhost:8000/api/players")
        .then((response) => {
          setPlayers(response.data.data);
          setLoaded(true);
        })
        .catch((err) => {console.log("There was an error: ", err)});
    }, []);

    const handleDelete = (e, id) => {
      axios.delete(`http://localhost:8000/api/players/${id}`)
      .then((response) => {
        setPlayers(players.filter(player => player._id !== id));
        setShow(false);
      })
      .catch((err) => {console.log("There was an error: ", err)});
    }

    const [show, setShow] = useState(false);
    const [playerDelete, setPlayerDelete] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (e, player, id) => {
      setPlayerDelete({player, id});
      setShow(true);
    }

    return (
      <div className="container mb-5">
          <table className="table table-striped border border-secondary align-middle shadow">
            <thead className="table-primary">
              <tr>
                <th>Player Name</th>
                <th>Preferred Position</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {loaded &&
                players.map((player, index) => {
                  return (
                    <tr key={index}>
                      <td>{player.playerName}</td>
                      <td>{player.playerPosition}</td>
                      {/* <td><button className="btn btn-outline-danger" onClick={(e)=>{handleDelete(e, player._id)}}>Delete</button></td> */}
                      <td><button className="btn btn-outline-danger" onClick={(e)=>{handleShow(e, player.playerName, player._id)}}>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Player Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete <b>{playerDelete.player}</b> from the roster?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cancel</Button>
              <Button variant="danger" onClick={(e)=>{handleDelete(e, playerDelete.id)}}>Delete</Button>
            </Modal.Footer>
          </Modal>
      </div>
    )
}

export default ListPlayers;