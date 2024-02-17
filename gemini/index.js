const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { generateResponse } = require("./controller/index.js");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.post("/generate", generateResponse);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/generate", (req, res) => {
  res.send(history);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
