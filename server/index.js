import express from "express";
import cors from "cors";
import crypto from "crypto";
import "dotenv/config";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Meow");
});

const readCatsFile = () => {
  // get reference to the cats.json file
  const catsFile = fs.readFileSync("./data/cats.json");
  // parse the data
  const catsData = JSON.parse(catsFile);
  return catsData;
};

// Define a GET route such that we'll return this cat data
app.get("/cats", (req, res) => {
  const catsData = readCatsFile();

  // Let's strip down the data for now
  const strippedData = catsData.map((cat) => {
    return {
      id: cat.id,
      name: cat.name,
      imageUrl: cat.imageUrl,
      isGhibli: cat.isGhibli,
      movie: cat.movie,
      posterPath: cat.posterPath,
    };
  });

  res.json(strippedData);
});

app.listen(PORT, () => {
  console.log("App is running on port ", PORT, "😻");
});
