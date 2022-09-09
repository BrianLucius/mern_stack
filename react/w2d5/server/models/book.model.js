const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { 
                type: String,
                required: [true, "Book title is required"],
                minLength: [5, "Title must be more than five characters long"]
    },
    author: { 
                type: String,
                required: [true, "Author is required"],
                minLength: [5, "Author must be more than five characters long"]
    },
    rating: { 
                type: Number,
                min: [1, "Rating must be between 1 - 5"],
                max: [5, "Rating must be between 1 - 5"]
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;