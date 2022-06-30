const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  addMovie,
  listMovie,
  updateMovie,
  deleteMovie,
} = require("./movie/functions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync();
    if (yargsObj.add) {
      //add something to movie table
      await addMovie({
        title: yargsObj.title,
        actor: yargsObj.actor,
      });
      console.log(`The movie ${yargsObj.title} has been added to the database`);
    } else if (yargsObj.list) {
      //list contents of movie table
      await listMovie();
    } else if (yargsObj.update) {
      //update one entry in movie table
      await updateMovie({ actor: yargsObj.actor }, { title: yargsObj.title });
    } else if (yargsObj.delete) {
      //delete entry from movie table
      await deleteMovie({ title: yargsObj.title });
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
