const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName : {
        type: String,
        required: [true, "Author name is required"],
        minLength: [3, "Author name must be at least three characters"]
    }
});

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;