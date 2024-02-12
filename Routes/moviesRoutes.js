const express = require("express");


const moviesController = require('./../Controllers/moviesContoller');
const router = express.Router();

router.route('/')
   .get(moviesController.getAllMovies)
   .post(moviesController.validateBody, moviesController.createMovie)

router.route('/:id')
   .get(moviesController.getMovie)
   .patch(moviesController.updateMovie)
   .delete(moviesController.deleteMovie)

module.exports = router;