const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'db4free.net',
  port : 3306,
  user: 'dba_citas',
  password: 'apidental',
  database: 'db_dental',
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
