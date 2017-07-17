"use strict";

const express = require('express'),
	app = express(),
	fs = require('fs');

app.use(express.static('build'));

app.listen(80, function () {
	console.log('Starting web server on http://localhost:80/');
});
