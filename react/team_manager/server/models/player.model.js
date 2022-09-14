const mongoose = require('mongoose');

const GamesSchema = new mongoose.Schema({
    gameNumber: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    }
});

const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, "Player name is required"],
        minLength: [2, "Player name must be more than two characters"]
    },
    playerPosition: {
        type: String,
        required: false
    },
    playerStatus: [GamesSchema]
});

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;