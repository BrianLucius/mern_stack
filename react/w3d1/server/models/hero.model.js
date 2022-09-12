const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Your hero must have a name"],
        minLength: [2, "Your hero's name must be more than two characters"]
    },
    rating: {
        type: Number,
        required: [true, "A rating is required"],
        min: [1, "Rating must be between 1 and 10"],
        max: [10, "Rating must be between 1 and 10"],
    },
    image: {
        type: String,
        required: [true, "You must provide an image URL"]
    }
});

const Hero = mongoose.model("Hero", HeroSchema);
module.exports = Hero;