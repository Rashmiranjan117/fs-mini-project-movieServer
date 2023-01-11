const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const app = express();
const { movieRouter } = require("./routes/movieRouter");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/", movieRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to Db");
  } catch (err) {
    console.log("Something went wrong While connecting", err);
  }
  console.log(`Server is running on Port: ${process.env.port}`);
});
