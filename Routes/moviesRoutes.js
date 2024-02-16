// moviesRoutes.js

const express = require("express");
const moviesController = require('./../Controllers/moviesContoller');
const router = express.Router();

router.route('/')
   .get(moviesController.getAllMovies)
   .post(moviesController.createMovie); // Ensure this is correctly referencing the createMovie function

// ...

module.exports = router;