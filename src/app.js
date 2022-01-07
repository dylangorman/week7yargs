const yargs = require("yargs");
const fs = require("fs");
const {
  addMovie,
  listMovies,
  updateMovie,
  // deleteMovie,
} = require("./utils/index");

const connection = require("./db/connection");

const command = process.argv[2];

const app = async (args) => {
  try {
    if (command === "add") {
      const movieObj = { title: args.title, actor: args.actor };
      // console.log("app.js hit");
      await connection(addMovie, movieObj);
      // console.log("after connection");
    } else if (command === "list") {
      await connection(listMovies);
    } else if (command === "update") {
      const updateObj = {
        title: args.title,
        updateKey: args.updateKey,
        updateValue: args.updateValue,
      };
    }
    await connection(updateMovie);
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
