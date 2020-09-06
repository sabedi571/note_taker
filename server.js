// Dependencies
// =============================================================
var express = require("express");
var apiRoute = require("./routes/apiRoute");
var htmlRoute = require("./routes/htmlRoute");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4000; 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
// =============================================================
app.use("/api", apiRoute);
app.use("/", htmlRoute);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});