const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
  Poster: String,
  Title: String,
  Year: Number,
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Ratings: Number,
  Metascore: Number,
  imdbRating: Number,
  imdbVotes: String,
  imdbID: String,
  Type: String,
  DVD: String,
  BoxOffice: String,
  Production: String,
  Response: String,
});

const movieModel = mongoose.model("moviedb", moviesSchema);

module.exports = { movieModel };
