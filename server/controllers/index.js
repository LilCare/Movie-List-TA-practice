const express = require('express');
const mysql = require('mysql');
const db = require('../data/db.js');
//var router = express.Router();

module.exports = {
  getAllDbMovies: (req, res) => {
    db.queryAsync('SELECT * from movieList')
      .then(data => { res.status(200).send(data) }) //
      .catch(err => {res.status(404).send('No movies found')});
  },
  addMovieToDb: (req, res) => {
    var columns = '(title)';
    var movieTitle = req.body.title;
    //db.queryAsync(`SELECT * from movieList where title = "${movieTitle}"`)
    db.queryAsync(`INSERT INTO movieList ${columns} VALUES ("${movieTitle}")`)
     .then(insertedData => { return db.queryAsync('SELECT * from movieList'); })
     .then(allData => { res.status(201).send(allData); })
     .catch(err => { console.log('this is err ', err); res.status(405).send('Movie already exists in database'); });
  }
}
