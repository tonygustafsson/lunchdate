"use strict";

const express = require('express'),
	app = express(),
	fs = require('fs');

app.use(express.static('/home/tony.gustafsson/lunchdate/client/build'));

app.listen(80, function () {
	console.log('Starting web server on http://localhost:80/');
});
