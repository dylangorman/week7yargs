const fs = require("fs");
const Movie = require("../models/models");
const mongoose = require("mongoose");
const addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    console.log("New Movie: ", newMovie.title);
  } catch (error) {
    console.log(error);
  }
};

const listMovies = async () => {
  try {
    console.log(await Movie.find({}));
  } catch (error) {
    console.log(error);
  }
};
const updateMovie = async (movieObj) => {
  const newMovie = await Movie.updateOne(
    { title: movieObj.title },
    { title: movieObj.updateTitle },
    { new: true }
  );
  console.log(
    `The Title: ${movieObj.title}, has been updated to Title: ${movieObj.updateTitle}.`
  );
};

const deleteMovie = async (movieObj) => {
  console.log(movieObj);
  try {
    await Movie.deleteOne(movieObj);
    console.log(`Sucessfully deleted ${movieObj.title}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
};
