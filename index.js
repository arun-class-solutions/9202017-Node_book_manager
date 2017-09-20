const express = require("express");
const app = express();

const request = require("request");

// Configure body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configure EJS to serve templates
app.set("view engine", "ejs");

// Configure Express to use the "assets" directory for static assets
app.use(express.static("./assets"));

app.get("/books", (req, res) => {
  request({
    method: "GET",
    uri: "http://myapi-profstream.herokuapp.com/api/fbcdf9/books"
  }, (err, response, body) => {
    res.render("index", {
      books: JSON.parse(body)
    });
  });
});

app.listen(3000);
