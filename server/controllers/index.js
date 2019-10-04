const express = require('express');
const mysql = require('mysql');
const db = require('../data/db.js');
//var router = express.Router();

module.exports = {
  getAllDbMovies: (req, res) => {
    db.queryAsync('SELECT * from movieList')
      .then(data => { res.status(200).send(data) })
      .catch(err => {res.status(404).send('No movies found')});
  },
  addMovieToDb: (req, res) => {
    let movieTitle = req.body.title;
    db.queryAsync(`INSERT INTO movieList (title) VALUES ('${movieTitle}')`)
     .then(insertedData => (db.queryAsync('SELECT * from movieList')))
     .then(allData => (res.status(201).send(allData)))
     .catch(err => (res.status(405).send('Movie already exists in database')));
  },
  updateWatched: (req, res) => {
    let movieTitle = req.body.title;
    //Query db for "watched"; update and toggle value; query for all data for response
    db.queryAsync(`SELECT watched FROM movieList WHERE title = '${movieTitle}'`)
      .then(data => {
        let watchedBool = (data[0].watched) ? 0 : 1;
        return db.queryAsync(`UPDATE movieList SET watched = ${watchedBool} WHERE title='${movieTitle}'`)
      })
      .then(data => (db.queryAsync('SELECT * from movieList')))
      .then(allData => (res.status(201).send(allData)))
      .catch(err => console.log(err));
  }
}

/*
INSERT INTO movieList (col_name) VALUES (value_list)
    [ON DUPLICATE KEY UPDATE assignment_list]

UPDATE movieList SET watched = 1 WHERE title='Hackers';

*/