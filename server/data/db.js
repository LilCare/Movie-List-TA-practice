const mysql = require('mysql');
const Promise = require('bluebird');

let db = mysql.createConnection({
  user: 'root',
  password: 'yourpassword',
  database: 'movieList'
});

Promise.promisifyAll(db);

module.exports.db = db;