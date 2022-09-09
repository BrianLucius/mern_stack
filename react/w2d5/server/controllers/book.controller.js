const Book = require('../models/book.model');

// Show all books
module.exports.showAllBooks = (req, res)=> {
    Book.find()
        .then(foundBooks => res.json({data: foundBooks}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Create a new book
module.exports.createOneBook = (req, res) => {
    Book.create(req.body)
        .then(newBook => res.json({data: newBook}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Find one book
module.exports.findOneBook = (req, res) => {
    Book.findOne({_id: req.params.id})
        .then(foundBook => res.json({data: foundBook}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//which book I want to update
//form information I will use to update the book with
module.exports.updateBook = (req, res) => {
    Book.findOneAndUpdate ({_id:req.params.id}, req.body, {new: true, runValidators: true}) //set the new option to true to return the document after update was applied
        .then(updatedBook => res.json({data: updatedBook}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//Delete book
module.exports.deleteBook = (req, res) => {
    Book.deleteOne({_id: req.params.id})
        .then(deletedBook => res.json({data: deletedBook}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}