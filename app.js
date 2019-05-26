const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, () => console.log("Port 4000 is listened"));

app.use(express.static("resources"));
