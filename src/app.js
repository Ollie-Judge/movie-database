const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie } = require("./movie/functions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync({ alter: true });
    if (yargsObj.add) {
      //add something to movie table
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
    } else if (yargsObj.list) {
      //list contents of movie table
    } else if (yargsObj.update) {
      //update one entry in movie table
    } else if (yargsObj.delete) {
      //delete entry from movie table
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await sequelize.close();
  }
};

app(yargs.argv);
