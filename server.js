//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Server config properties
var app = express();
var PORT = 7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./api-routes.js')(app);
require('./html-routes.js')(app);

app.listen(PORT, function(){
  console.log("App listening on port: " + PORT);
})
