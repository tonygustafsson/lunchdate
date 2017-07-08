"use strict";

const express = require('express'),
	  app = express(),
	  fs = require('fs'),
	  r = require('rethinkdb'),
	  bodyParser = require('body-parser'),
	  cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const clientUrl = 'http://localhost:3000'; // For CORS

app.listen(8080, function () {
	console.log('Starting web server');
});

var connection = null,
	placeTable = 'places',
	dateTable = 'dates';

// Connect to DB
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
	if (err) throw err;

	connection = conn;
	connection.use('lunchdate');
});

/* Places */

function lunchDatePlaceList(res) {
	r.table(placeTable)
		.orderBy('name')
		.run(connection, function(err, cursor) {
			if (err) throw err;

			cursor.toArray(function(err, result) {
				if (err) throw err;

				res.send(JSON.stringify(result, null, 2));
			});
	});
}

app.get('/lunchdate/place/list', function (req, res) {
    res.header('Access-Control-Allow-Origin', clientUrl);

	lunchDatePlaceList(res);
});

app.post('/lunchdate/place/create', function (req, res) {
    res.header('Access-Control-Allow-Origin', clientUrl);
    res.header('Access-Control-Allow-Methods', 'POST');

	var placeName = req.body.name,
		identifier = placeName.toLowerCase().replace(/[^a-z0-9]/gi,'');

	if (placeName === "" || identifier === "") {
		res.status(500).send('The place name cannot be an empty value.');
		return;
	}

	r.table(placeTable)
		.insert([
			{ name: placeName, identifier: identifier }
		]).run(connection, function(err, result) {
			if (err) throw err;

			lunchDatePlaceList(res);
	});
});

app.post('/lunchdate/place/remove', function (req, res) {
    res.header('Access-Control-Allow-Origin', clientUrl);
    res.header('Access-Control-Allow-Methods', 'POST');

	var id = req.body.id;

	r.table(placeTable)
	.get(id)
	.delete()
	.run(connection, function(err, result) {
		if (err) throw err;

		lunchDatePlaceList(res);
	});
});

/* Dates */

function lunchDateTodaysDatesList(res) {
	r.table(dateTable)
		.orderBy('time')
		.run(connection, function(err, cursor) {
			if (err) throw err;

			cursor.toArray(function(err, result) {
				if (err) throw err;

				res.send(JSON.stringify(result, null, 2));
			});
	});
}

app.get('/lunchdate/date/list', function (req, res) {
    res.header('Access-Control-Allow-Origin', clientUrl);

	lunchDateTodaysDatesList(res);
});

app.post('/lunchdate/date/create', function (req, res) {
    res.header('Access-Control-Allow-Origin', clientUrl);
    res.header('Access-Control-Allow-Methods', 'POST');

	var time = req.body.time,
		user = req.body.user,
		place = req.body.place,
		takeaway = req.body.takeaway,
		note = req.body.note;

	r.table(dateTable)
		.insert([
			{ time: time, user: user, place : place, takeaway: takeaway, note: note }
		]).run(connection, function(err, result) {
			if (err) throw err;

			lunchDateTodaysDatesList(res);
	});
});

app.post('/lunchdate/date/remove', function (req, res) {
    res.header('Access-Control-Allow-Origin', clientUrl);
    res.header('Access-Control-Allow-Methods', 'POST');

	var id = req.body.id;

	r.table(dateTable)
	.get(id)
	.delete()
	.run(connection, function(err, result) {
		if (err) throw err;

		lunchDateTodaysDatesList(res);
	});
});

