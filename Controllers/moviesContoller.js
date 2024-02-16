const mongoose = require('mongoose');
const Movie = require('./../Models/movieModel')


exports.getAllMovies =  (req, res) => {
    res.status(200).json({
        status: "sucess",
        requestedAt: req.requestedAt,
        count: movies.length,
        data: {
            movies: movies
        }
    });

};

// Get Movie by Id
exports.getMovie = (req, res) => {
  
};


// Create Movie 
// moviesContoller.js

// ...

// Create Movie   

// moviesContoller.js

// ...

// Create Movie   
exports.createMovie =  async (req, res) => {
    try {
        const movie = await Movie.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                movie
            }
        });
    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) {
            console.error('Validation error:', err.errors);
        } else {
            console.error('Error creating movie:', err);
        }
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// ...
// ...

// Update movie
exports.updateMovie = (req, res) => {
    

};

// Delete Movies 
exports.deleteMovie = (req, res) =>{
    
};
