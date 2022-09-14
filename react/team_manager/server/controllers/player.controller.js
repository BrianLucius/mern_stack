const Player = require('../models/player.model');

// Show all Players
module.exports.showAllPlayers = (req, res)=> {
    Player.find()
        .then(foundPlayers => res.json({data: foundPlayers}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Create a new Player
module.exports.createOnePlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json({data: newPlayer}))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}));
}

//Find one Player
module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then(foundPlayer => res.json({data: foundPlayer}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Update Player by _id
module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate ({_id:req.params.id}, req.body, {new: true, runValidators: true}) //set the new option to true to return the document after update was applied
        .then(updatedPlayer => res.json({data: updatedPlayer}))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}));
}

//Delete Player
module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(deletedPlayer => res.json({data: deletedPlayer}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}