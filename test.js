const express = require("express");
const ourApp = express();
const path = require("path");

ourApp.use(express.urlencoded({ extended: false }));
ourApp.use(express.static(path.join(__dirname, "public")));

ourApp.set("view engine", "ejs");
ourApp.set("views", path.join(__dirname, "views"));

ourApp.get("/", function (req, res) {
  res.render("home", {
    pets: [
      { name: "Meowsalot", species: "cat" },
      { name: "Barksalot", species: "dog" },
    ],
  });
});
ourApp.post("/answer", function (req, res) {
  if (req.body.skyColor.trim().toUpperCase() == "BLUE") {
    res.send(`
      <p>Congarts, correct answer</p>
      <a href="/">Back to homepage</a>
      `);
  } else {
    res.send(`
      <p>Sorry, wrong answer</p>
      <a href="/">Back to homepage</a>
      `);
  }
});
ourApp.get("/answer", function (req, res) {
  res.send("you lost");
});

ourApp.get("/api/pets", function (req, res) {
  res.json([
    { name: "Meowsalot", species: "cat" },
    { name: "Barksalot", species: "dog" },
  ]);
});

ourApp.listen(3000);
