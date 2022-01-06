const yargs = require("yargs");
const {
  addMovie, //CREATE
  listMovies, //READ
  updateMovie, //UPDATE
  deleteMovie, //DELETE
} = require("./utils/index");
const fs = require("fs");
const app = () => {
  try {
    let movieArray;
    try {
      movieArray = JSON.parse(fs.readFileSync("./storage.json"));
    } catch (error) {
      movieArray = [];
    }

    try {
      if (process.argv[2] === "add") {
        addMovie(movieArray, {
          title: yargs.argv.title,
          actor: yargs.argv.actor,
        });
      } else if (process.argv[2] === "list") {
        listMovies();
      } else if (process.argv[2] === "update") {
        updateMovie(
          movieArray,
          { title: yargs.argv.title, actor: yargs.argv.actor },
          { title: yargs.argv.newTitle, actor: yargs.argv.newActor }
        );
      } else if (process.argv[2] === "delete") {
        deleteMovie(movieArray, {
          title: yargs.argv.title,
          actor: yargs.argv.actor,
        });
      } else {
        console.log("Input unknown, please try again!");
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log();
  }
};

app();
