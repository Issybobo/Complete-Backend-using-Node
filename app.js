// Import package
const express = require("express");

const morgan = require('morgan');

const movieRouter = require('./Routes/moviesRoutes');

let app = express();

//Custom middleware
const logger = function(req, res, next){
    console.log('customer middleware created')
    next();
}

app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


app.use(express.static('./public'))
app.use(logger)
app.use((req, res, next ) => {
    req.requestedAt = new Date().toISOString();
    next();
})



// ROUTE HANDLER FUNCTIONS 

// Get All movies 

/*app.get('/api/v1/movies', getAllMovies )
app.get('/api/v1/movies/:id', getMovie)
app.post('/api/v1/movies', createMovie)
app.patch('/api/v1/movies/:id', updateMovie)
app.delete('/api/v1/movies/:id', deleteMovie)*/



app.use('/api/v1/movies', movieRouter)

module.exports = app;