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

app.listen(3000, function () {
	console.log('Starting web server');
});


/* ------------------ LUNCH DATE ------------------*/

var connection = null,
	placeTable = 'places',
	dateTable = 'dates';

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
	if (err) throw err;

	connection = conn;
	connection.use('lunchdate');
});

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
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');

	lunchDatePlaceList(res);
});

app.post('/lunchdate/place/create', function (req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Methods', 'POST');

	var placeName = req.body.name,
		identifier = placeName.toLowerCase().replace(/[^a-z0-9]/gi,'');

	r.table(placeTable)
		.insert([
			{ name: placeName, identifier: identifier }
		]).run(connection, function(err, result) {
			if (err) throw err;

			lunchDatePlaceList(res);
	});
});

app.post('/lunchdate/place/remove', function (req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
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
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');

	lunchDateTodaysDatesList(res);
});

app.post('/lunchdate/date/create', function (req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
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
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
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

/* --------------------- BOOKS ---------------------*/

app.get('/list-books', function (req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');

	var connection = null;

	r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
		if (err) throw err;
		connection = conn;

		r.table('authors').orderBy('name').run(connection, function(err, cursor) {
			if (err) throw err;

			cursor.toArray(function(err, result) {
				if (err) throw err;

				res.send(JSON.stringify(result, null, 2));
			});
		});
	});
});

app.post('/save-book', function (req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Methods', 'POST');

	var connection = null;

	r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
		if (err) throw err;
		connection = conn;

		var newBookName = req.body.bookName;

		r.table('authors').insert([
			{ name: newBookName, tv_show: "Battlestar Galactica",
			posts: [
					{title: "Decommissioning speech", content: "The Cylon War is long over..."},
					{title: "The new Earth", content: "The discoveries of the past few days..."}
				]
			}
		]).run(connection, function(err, result) {
			if (err) throw err;
			console.log(JSON.stringify(result, null, 2));

			r.table('authors').orderBy('name').run(connection, function(err, cursor) {
				if (err) throw err;

				cursor.toArray(function(err, result) {
					if (err) throw err;

					res.send(JSON.stringify(result, null, 2));
				});
			});
		})
	});
});

app.post('/edit-book', function (req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Methods', 'POST');

	var connection = null;

	r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
		if (err) throw err;
		connection = conn;

		var id = req.body.id;
		var newBookName = req.body.bookName;

		r.table('authors').get(id)
		.update({
			"name": newBookName
		})
		.run(connection, function(err, result) {
			if (err) throw err;
			console.log(JSON.stringify(result, null, 2));

			r.table('authors').orderBy('name').run(connection, function(err, cursor) {
				if (err) throw err;

				cursor.toArray(function(err, result) {
					if (err) throw err;

					res.send(JSON.stringify(result, null, 2));
				});
			});
		})
	});
});

app.post('/remove-book', function (req, res) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Methods', 'POST');

	var connection = null;

	r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
		if (err) throw err;
		connection = conn;

		var id = req.body.id;

		r.table('authors').get(id).delete()
		.run(connection, function(err, result) {
			if (err) throw err;
			console.log(JSON.stringify(result, null, 2));

			r.table('authors').orderBy('name').run(connection, function(err, cursor) {
				if (err) throw err;

				cursor.toArray(function(err, result) {
					if (err) throw err;

					res.send(JSON.stringify(result, null, 2));
				});
			});
		})
	});
});

