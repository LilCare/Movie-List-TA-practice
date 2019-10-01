const express = require('express');
const db = require('../data/db.js');
var router = express.Router();

router.get('/movieList', function (req, res) {
  db.queryAsync('SELECT * from movieList')
    .then(console.log(data))
    .catch('there are no movies for that search');
})

module.exports = router;