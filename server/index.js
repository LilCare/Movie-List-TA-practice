// import express framework
const express = require('express');
const path = require('path');
const router = require('./controllers');
const bodyParser = require('body-parser');

// Set PORT# to listen on
const PORT = 3000;

// create server
const app = express();

// create application/json parser
var jsonParser = bodyParser.json()


// serve static files
app.use(express.static(path.join(__dirname, '../public')));

// query the dataBase 
app.get('/movieList', (req, res, next) => {
  router.getAllDbMovies(req, res);
});

// add movies to the dataBase
app.post('/movieList', jsonParser, (req, res, next) => { 
  // this is the request header content type:  application/json;charset=UTF-8
  router.addMovieToDb(req, res);
});

// update the database with watched films
app.post('/updateWatched', jsonParser, (req, res) => {
  console.log('recieved post to /updateWatched', req.body);
  router.updateWatched(req, res);
})

// start server
app.listen(PORT, () => console.log('Express server started on', PORT));


