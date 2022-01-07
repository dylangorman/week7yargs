const fs = require("fs");
const Movie = require("../models/models");
const mongoose = require("mongoose");
const addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    console.log("New Movie: ", newMovie);
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
// const updateMovie = async (collection, updateObj) => {
//   await collection.updateOne(
//     { title: updateObj.title },
//     { Sset: { title: updateObj.updateValue } }
//   );
// };

// const deleteMovie = (movieArray, filterObj) => {
//   try {
//     let newArray = movieArray.filter(
//       (movie) => movie.title !== filterObj.title
//     );
//     const stringyObj = JSON.stringify(newArray);
//     fs.writeFileSync("./storage.json", stringyObj);
//     console.log(
//       "Thank you for your input, this data has now been removed from the list!"
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  addMovie,
  listMovies,
  // updateMovie,
  // deleteMovie,
};
