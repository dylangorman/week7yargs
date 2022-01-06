const fs = require("fs");

const addMovie = (movieArray, movieObj) => {
  try {
    movieArray.push(movieObj);
    console.log(
      "Thank you for your input, this data has now been added to the list!"
    );
    const stringyObj = JSON.stringify(movieArray);
    fs.writeFileSync("./storage.json", stringyObj);
  } catch (error) {
    console.log(error);
  }
};
const deleteMovie = (movieArray, movieObj) => {
  try {
    movieArray.splice(movieObj);
    console.log(
      "Thank you for your input, this data has now been removed from the list!"
    );
    const stringyObj = JSON.stringify(movieArray);
    fs.writeFileSync("./storage.json", stringyObj);
  } catch (error) {
    console.log(error);
  }
};

const listMovies = () => {
  try {
    console.log(JSON.parse(fs.readFileSync("./storage.json")));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addMovie,
  deleteMovie,
  listMovies,
  // updateMovie,
};

// UPDATE MOVIE SYNTAX, HOW TO IMPLEMMENT?
// // const updateMovie = (title, actor) => {
// //   try {
// //     const movieArr = JSON.parse(fs.readFileSync("./storage.json"));
// //     const movieObj = movieArr.find((movieArr) => movieArr.title === title);
// //     movieObj.actor = actor;

// //     const stringObj = JSON.stringify(movieArr);
// //     fs.writeFileSync("./storage.json", stringObj);
// //   } catch (error) {
// //     // ENOENT
// //     if (error.code === "ENOENT") {
// //       displayInfo("Movie database was not found.");
// //     } else {
// //       displayInfo(
// //         "Movie was not found in the database. No update has been made."
// //       );
//     }
//   }
// };
