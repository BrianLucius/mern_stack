const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: { 
        type: String,
        required: [true, "The setup is required"]},
    punchline: {
        type: String,
        required: [true, "The punchline is required"]}
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;