// import express framework
const express = require('express');
const path = require('path');
var router = require('./controllers')

// Set PORT# to listen on
const PORT = 3000;

// create server
const app = express();


// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// query the dataBase 
app.get('/movieList', (req, res) => {
  router.getAllDbMovies(req, res);
});

// add movies to the dataBase
app.post('/movieList', (req, res) => {
  console.log('this is the req body: ', req.body);
  router.addMovieToDb(req, res);
});

// start server
app.listen(PORT, () => console.log('Express server started on', PORT));


