var mysql = require('mysql');
var database = 'veiculos';

var client = mysql.createConnection({
   user: 'root',
   password: '20101996',
   host: 'localhost',
   port: 3306
});

client.query('USE ' + database);

module.exports = client;