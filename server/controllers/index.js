const express = require('express');
const db = require('../data/db.js');
var router = express.Router();

module.exports = {
  getAllDbMovies: (req, res) => {
    db.queryAsync('SELECT * from movieList')
      .then(data => { console.log(data); res.status(200).send(data); }) //
      .catch(err => {res.status(404).send('No movies found')});
  }
}