const Joke = require('../models/jokes.model');

// Show all Jokes
module.exports.showAllJokes = (req, res)=> {
    Joke.find()
        .then(foundJokes => res.json({data: foundJokes}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Create a new Joke
module.exports.createOneJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({data: newJoke}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Find one Joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(foundJoke => res.json({data: foundJoke}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Update Joke by _id
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate ({_id:req.params.id}, req.body, {new: true, runValidators: true}) //set the new option to true to return the document after update was applied
        .then(updatedJoke => res.json({data: updatedJoke}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Delete Joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke => res.json({data: deletedJoke}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}