const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./utils/index");

const connection = require("./db/connection.js");

const command = yargs.argv._[0];
console.log(yargs.argv);

const app = async (args) => {
  console.log(args);
  try {
    if (command === "add") {
      const movie = await addMovie({ title: args.title, actor: args.actor });
    } else if (command === "list") {
      await listMovies();
    } else if (command === "update") {
      await updateMovie({ title: args.title, updateTitle: args.updateTitle });
    } else if (command === "delete") {
      await deleteMovie({ title: args.title });
    } else console.log("Sorry I don't understand the input");
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
