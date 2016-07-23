var path = require('path');
var tableData = require('./table-data.js'); //Requires table-data.js
var waitListData = require('./waiting-list.js'); //Requires waiting-list.js

module.exports = function(app) {

  app.get('/api/tables', function(req, res){
    res.json(tableData);
  });

  app.get('/api/waitlist', function(req, res){
    res.json(waitListData);
  });


  //Posts data entered by the user to the JSON file
  app.post('/api/tables', function(req, res){

    if ( tableData.length < 5 ) {
      tableData.push(req.body);
      res.json(true);
    }

    // Or false if they don't have a table
    else {
      waitListData.push(req.body);
      res.json(false); // KEY LINE
    }

  });

  //Empties arrays for testing purposes
/*  app.post('/api/clear', function(req, res){
    tableData = [];
    waitListData = [];

    console.log(tableData);
  })*/
}
