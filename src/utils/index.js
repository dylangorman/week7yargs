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
  } catch (error) {
    console.log(error);
  }
};
const updateMovie = async (collection, updateObj) => {
  await collection.updateOne(
    { title: updateObj.title },
    { Sset: { title: updateObj.updateValue } }
  );
};

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
  updateMovie,
  // deleteMovie,
};
