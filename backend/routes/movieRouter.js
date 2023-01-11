const express = require("express");
const { movieModel } = require("../model/movie.model");

const movieRouter = express.Router();
movieRouter.use(express.json());
movieRouter.get("/", async (req, res) => {
  try {
    let data = await movieModel.find();
    res.send({ msg: "Welcome to Masai Movie App. All the details about latest movies are available here.", data });
  } catch (err) {
    res.send(err);
  }
});

movieRouter.post("/add", async (req, res) => {
  let data = req.body;
  try {
    await movieModel.insertMany(data);
    res.send("Data added");
  } catch (err) {
    console.log("Err while posting", err);
    res.send(err);
  }
});

movieRouter.patch("/update/:id", async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  try {
    await movieModel.findByIdAndUpdate({ _id: id }, body);
    res.send("Data updated");
  } catch (err) {
    console.log("Err while posting", err);
    res.send(err);
  }
});

movieRouter.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;
  try {
    await movieModel.findByIdAndDelete({ _id: id });
    res.send("Data Deleted");
  } catch (err) {
    console.log("Err while posting", err);
    res.send(err);
  }
});
module.exports = { movieRouter };
//  Poster: String,
//     Title: String,
//     Year:Number,
//     Rated: String,
//     Released: String,
//     Runtime: String,
//     Genre: String,
//     Director: String,
//     Writer: String,
//     Actors:String,
//     Plot: String,
//     Language: String,
//     Country: String,
//     Awards: String,
//     Ratings: Number,
//     Metascore: Number,
//     imdbRating: Number,
//     imdbVotes:String,
//     imdbID:String,
//     Type:String,
//     DVD:String,
//     BoxOffice:String,
//     Production:String,
//     Response:String
