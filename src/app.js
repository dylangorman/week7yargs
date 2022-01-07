const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  // updateMovie,
  // deleteMovie,
} = require("./utils/index");

const connection = require("./db/connection.js");

const command = yargs.argv._[0];
console.log(yargs.argv);

const app = async (args) => {
  try {
    if (command === "add") {
      const movie = await addMovie({ title: args.title, actor: args.actor });
    } else if (command === "list") {
      await listMovies();
      // } else if (command === "update") {
      //   const updateObj = {
      //     title: args.title,
      //     updateKey: args.updateKey,
      //     updateValue: args.updateValue,
      //   };
      // }
      // await connection(updateMovie);
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
