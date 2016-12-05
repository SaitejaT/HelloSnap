var express = require('express');
var app     = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(8080, function(){
    console.log("Running at http://localhost:8080/");
});