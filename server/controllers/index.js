const express = require('express');
const db = require('../data/db.js');
var router = express.Router();

module.exports = {
  getAllDbMovies: (req, res) => {
    db.queryAsync('SELECT * from movieList')
      .then(data => { console.log(data); res.send(data); }) //
      .catch('there are no movies for that search');
  }
}