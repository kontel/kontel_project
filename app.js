var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get('/List', function(req, res) {
  res.send([{
    name: "name",
    value: "value"
  },
  {
    name: "name",
    value: "value"
  },
  {
    name: "name",
    value: "value"
  }
  ]);
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
