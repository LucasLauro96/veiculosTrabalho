var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');

app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('port', 3000);

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('../app/views/index.ejs');
});

require('../app/routes/automovel')(app);
require('../app/routes/montadora')(app);

module.exports = app;