const express = require('express');
const mongoose = require('mongoose');

const app = express();
const database = 'mongodb://localhost/hello-doggy';

mongoose.connect(database);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("connected to mongo");
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	console.log(req.method, req.url, req.xhr);
	res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('listening on port 3000'));