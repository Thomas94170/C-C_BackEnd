const express = require("express");
const cors = require("cors");
const app = express();
const port = 4500;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Express!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
