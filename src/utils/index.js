const fs = require("fs");

const addMovie = async (collection, movieObj) => {
  try {
    await collection.insertOne(movieObj);
    console.log(`Successfully added ${movieObj}.title}.`);
  } catch (error) {
    console.log(error);
  }
};
const listMovies = async (collection) => {
  try {
    const movieArray = await collection.find({}).toArray();
    if (movieArray.length >= 1) {
      console.log(movieArray);
    } else "There are no movies to display.";
  } catch (error) {
    console.log(error);
  }
};
// const updateMovie = (movieArray, filterObj, newMovie) => {
//   try {
//     let newArray = movieArray;
//     for (movie in newArray) {
//       if (newArray[movie].title === filterObj.title) {
//         newArray[movie] = newMovie;
//         const stringyObj = JSON.stringify(newArray);
//         fs.writeFileSync("./storage.json", stringyObj);
//         break;
//       } else {
//         console.log("I don't understand");
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
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
