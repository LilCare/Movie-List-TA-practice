const express = require('express');
const db = require('../data/db.js');
var router = express.Router();

module.exports = {
  getAllDbMovies: (req, res) => {
    db.queryAsync('SELECT * from movieList')
      .then(data => { console.log(data); res.status(200).send(data); }) //
      .catch(err => {res.status(404).send('No movies found')});
  },
  addMovieToDb: (req, res) => {
    var columns = '(title)';
    //console.log(req.body);
    // db.queryAsync('SELECT * from movieList where title != ${req.body}')
    //  .then(db.queryAsync(`INSERT INTO movieList ${columns} VALUES ${req.body}`))
    //  .then(data => { console.log(data); res.status(201).send(); })
    //  .catch(data => {res.status(405).send('Movie already exists in database')})
    res.send()
  }
}