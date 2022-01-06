const yargs = require("yargs");
const fs = require("fs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./utils/index");
const connection = require("./db/connection");
const command = process.argv[2];
const app = async (args) => {
  try {
    if (command === "add") {
      const movieObj = { title: args.title, actor: args.actor };
      console.log("app.js hit");
      await connection(addMovie, movieObj);
      console.log("after connection");
    }
    // } else if (process.argv[2] === "delete") {
    //   deleteMovie(movieArray, {
    //     title: yargs.argv.title,
    //     actor: yargs.argv.actor,
    //   });
    // } else if (process.argv[2] === "list") {
    //   listMovies();
    // } else if (process.argv[2] === "update") {
    //   updateMovie(yargs.argv.title, yargs.argv.actor);
    // }
    // } else {
    //   console.log("Input unknown, please try again!");
    // }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
