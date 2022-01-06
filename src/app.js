const yargs = require("yargs");

const {
  addMovie,
  listMovies,
  // updateMovie,
  // deleteMovie,
} = require("./utils/index");
const fs = require("fs");
const { ConnectionCheckedInEvent } = require("mongodb");
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
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
