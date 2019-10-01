// import express framework
const express = require('express');
const path = require('path');
var router = require('./controllers/searchExample.js')

// Set PORT# to listen on
const PORT = 3000;

// create server
const app = express();


// serve static files
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

// query the dataBase 
app.get('/', function (req, res, next) {
  
})

// start server
app.listen(PORT, () => console.log('Express server started on', PORT));


