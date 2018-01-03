const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const bucketlist = require('./controllers/bucketlist');

// connect mongoose to database
mongoose.connect(config.database);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
    console.log('connection opened.');
});

// initialzie express app
const app = express();

// port
const port = 3000;

// load middleware
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Invalid page');
});

app.use('/bucketlist', bucketlist);

app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});