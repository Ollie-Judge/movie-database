const Movie = require("./table");

exports.addMovie = async (movieObj) => {
  try {
    const response = await Movie.create(movieObj);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
