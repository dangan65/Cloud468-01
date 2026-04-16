const express = require('express');
const app     = express();
const db      = require('./db');
const sharks  = require('./routes/sharks');

const path = __dirname + '/views/';
const port = 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/sharks', sharks);

app.get('/', (req, res) => res.sendFile(path + 'index.html'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
