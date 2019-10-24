require("dotenv").config();

var express = require("express");
var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
  console.log("App listening on port " + PORT);
})

module.exports = app;