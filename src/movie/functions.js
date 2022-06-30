const Movie = require("./table");

exports.addMovie = async (movieObj) => {
  try {
    //add a movies
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovie = async () => {
  try {
    //list all movies
    const movies = await Movie.findAll();
    for (let i = 0; i < movies.length; i++) {
      console.log(movies[i].dataValues.title, movies[i].dataValues.actor);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (updateObj, filterObj) => {
  try {
    //find and update a movie
    const response = await Movie.update(updateObj, { where: filterObj });
    if (response[0] > 0) {
      console.log("The movie has been successfully updated");
    } else {
      console.log("Error, incorrect command, please try again");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (filterObj) => {
  try {
    //delete a movie
    const response = await Movie.destroy({ where: filterObj });
    if (response > 0) {
      console.log("The movie has been deleted");
    } else {
      console.log("Error, incorrect command, please try again");
    }
  } catch (error) {
    console.log(error);
  }
};
