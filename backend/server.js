const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let notes = [];

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.post("/notes", (req, res) => {
  const note = req.body;
  notes.push(note);
  res.json({ message: "Note added" });
});

app.delete("/notes/:index", (req, res) => {
  notes.splice(req.params.index, 1);
  res.json({ message: "Note deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));