// movieModel.js

// Model schema
const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    name: {
        type: String,  
        required: [true, 'Name is required field!'],
        unique: true
    },
    description: {
        type: String,  
        required: [true, 'Description is required field!']
    },  
    duration: {
        type: Number,  
        required: [true, 'Duration is required field!']
    },
    rating: {
        type: Number,  
        default:  1.0
    },
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;