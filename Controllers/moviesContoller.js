const fs = require("fs");

let movies = JSON.parse(fs.readFileSync('./data/movies.json'));

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
    //console.log(req.params);
    // CONVERT ID TO NUMBER TYPE
    const id = parseInt(req.params.id, 10);

    // FIND MOVIES BASED ON ID PARAMETERS
    let movie = movies.find(el => el.id === id )

    if(!movie){
        return res.status(404).json({
            status: "fail",
            message: 'Movie with ID' +id+ 'is not found'
        })
    }

    // SEND MOVIE IN THE RESPONSE
    res.status(200).json({
        status: "success",
        data: {
            movie: movie
        }
    });
};

exports.validateBody = (req, res, next) => {
    if(!req.body.name || !req.body.releaseYear){
        return res.status(400).json({
            status: 'fail',
            message: 'Not a valid movie data'
        })
    }
    next();
}

// Create Movie 
exports.createMovie =  (req, res) => {
    //console.log(req.body);
    //create new id
    const newId = movies[movies.length - 1].id + 1;
    
    // create new movie
    const newMovie = Object.assign({id: newId}, req.body)

    movies.push(newMovie); // This push the movie to new movie

    // save the new movie inside a json file
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                movie: newMovie
            }
        })
    })
    //res.send('Created')
};

// Update movie
exports.updateMovie = (req, res) => {
    let id = req.params.id * 1;
    let movieToUpdate = movies.find(el => el.id === id );

    if(!movieToUpdate){
        return res.status(404).json({
            status: "fail",
            message: "No movie object with ID" +id+ "is found"
        })
    }
    let index = movies.indexOf(movieToUpdate);

    Object.assign(movieToUpdate, req.body);
    movies[index] = movieToUpdate;

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        res.status(200).json({
            status: "success",
            data: {
                movie: movieToUpdate
            }
        })
    })

};

// Delete Movies 
exports.deleteMovie = (req, res) =>{
    const id = req.params.id * 1;
    const movieToDelete = movies.find(el => el.id === id);
    if(!movieToDelete){
        return res.status(404).json({
            status: "fail",
            message: "No movie object with ID" +id+ "is found to delete"
        })
    }
    const index = movies.indexOf(movieToDelete);

    movies.splice(index, 1);

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) =>{
        res.status(204).json({
            status: "success",
            data: {
                movie: null
            }
        })
    })
};
