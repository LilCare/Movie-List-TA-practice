let mysql = require('mysql');

let db = mysql.createConnection({
  user: 'root',
  password: 'yourpassword',
  database: 'movieList'
});

module.exports.db = db;