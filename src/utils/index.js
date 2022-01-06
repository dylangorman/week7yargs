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
const deleteMovie = (movieArray, filterObj) => {
  try {
    let newArray = movieArray.filter(
      (movie) => movie.title !== filterObj.title
    );
    const stringyObj = JSON.stringify(newArray);
    fs.writeFileSync("./storage.json", stringyObj);
    console.log(
      "Thank you for your input, this data has now been removed from the list!"
    );
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = (movieArray, filterObj, newMovie) => {
  try {
    let newArray = movieArray;
    for (movie in newArray) {
      if (newArray[movie].title === filterObj.title) {
        newArray[movie] = newMovie;
        const stringyObj = JSON.stringify(newArray);
        fs.writeFileSync("./storage.json", stringyObj);
        break;
      } else {
        console.log("I don't understand");
      }
    }
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
  updateMovie,
};
