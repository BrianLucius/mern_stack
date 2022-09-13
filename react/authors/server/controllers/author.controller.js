const Author = require('../models/author.model');

// Show all Authors
module.exports.showAllAuthors = (req, res)=> {
    Author.find(res)
        .then(foundAuthors => res.json({data: foundAuthors}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Create a new Author
module.exports.createOneAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({data: newAuthor}))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}));
}

//Find one Author
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(foundAuthor => res.json({data: foundAuthor}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Update Author by _id
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate ({_id:req.params.id}, req.body, {new: true, runValidators: true}) //set the new option to true to return the document after update was applied
        .then(updatedAuthor => res.json({data: updatedAuthor}))
        .catch(err => res.status(400).json({message: 'Something went wrong', error: err}));
}

//Delete Author
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deletedAuthor => res.json({data: deletedAuthor}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}