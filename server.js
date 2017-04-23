// Dependencies
var express = require('express');  
var path = require('path');  
var bodyParser = require('body-parser'); 

// Routes
var index = require('./routes/index');

// Port
var port = '';

// Express
var app = express(); 

// Body Parser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

// Static Route Angular
app.use(express.static(path.join(__dirname, 'client')));

// Routes
app.use('/', index);

// 404
app.use(function (req, res, next) {
  res.sendFile(__dirname + '/views/404.html');
})

// Listen to run the server
app.listen(port, function(){
	console.log('Available On Root Domain');
});