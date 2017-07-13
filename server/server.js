"use strict";

const express = require('express'),
	app = express(),
	fs = require('fs'),
	r = require('rethinkdb'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	moment = require('moment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const clientUrl = 'http://localhost:3000', // For CORS
	  placeTable = 'places',
	  dateTable = 'dates';

app.listen(8081, function () {
	console.log('Starting web server on http://localhost:8081/');
});

let connection = null;

// Connect to DB
r.connect({ host: 'localhost', port: 28015 }, function (err, conn) {
	if (err) throw err;

	connection = conn;
	connection.use('lunchdate');
});

/* Places */

function lunchDatePlaceList(res) {
	r.table(placeTable)
		.orderBy('name')
		.run(connection, function (err, cursor) {
			if (err) throw err;

			cursor.toArray(function (err, places) {
				if (err) throw err;

				places.map(function (place) {
					place.imageUrl = '/img/places/' + place.identifier + '.png';
				});

				res.send(JSON.stringify(places, null, 2));
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
		identifier = placeName.toLowerCase().replace(/[^a-z0-9]/gi, '');

	if (placeName === "" || identifier === "") {
		res.status(500).send('The place name cannot be an empty value.');
		return;
	}

	r.table(placeTable)
		.insert([
			{ name: placeName, identifier: identifier }
		]).run(connection, function (err, result) {
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
		.run(connection, function (err, result) {
			if (err) throw err;

			lunchDatePlaceList(res);
		});
});

/* Dates */

const getDateFromTime = (time) => {
	const 	timeInfo = time.split(':'),
		  	hour = parseInt(timeInfo[0]),
			minute = parseInt(timeInfo[1]),
			second = 0,
			jsDate = new Date(),
			year = jsDate.getUTCFullYear(),
			month = jsDate.getUTCMonth(),
			day = jsDate.getUTCDate();

	const momentTime = moment([year, month, day, hour, minute, second]);

	return momentTime.toISOString();
};

const getTimeFromDate = (time) => {
	return moment(time).format('HH:mm');
};

function lunchDateTodaysDatesList(res) {
	r.table(dateTable)
		.filter(function (date) {
			return r.ISO8601(date("time")).date().eq(r.now().date());
		})
		.orderBy('time')
		.run(connection, function (err, cursor) {
			if (err) throw err;

			cursor.toArray(function (err, dates) {
				if (err) throw err;

				dates.map(function (date) {
					date.time = getTimeFromDate(date.time);
				});

				res.send(JSON.stringify(dates, null, 2));
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

	var time = getDateFromTime(req.body.time),
		user = req.body.user,
		place = req.body.place,
		takeaway = req.body.takeaway,
		note = req.body.note,
		participants = req.body.participants;

	if (time === "" || user === "" || place === "") {
		res.status(500).send('Time, user or place cannot be an empty value.');
		return;
	}

	r.table(dateTable)
		.insert([
			{ time: time, user: user, place: place, takeaway: takeaway, note: note, participants: participants }
		]).run(connection, function (err, result) {
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
		.run(connection, function (err, result) {
			if (err) throw err;

			lunchDateTodaysDatesList(res);
		});
});

app.post('/lunchdate/date/addParticipant', function (req, res) {
	res.header('Access-Control-Allow-Origin', clientUrl);
	res.header('Access-Control-Allow-Methods', 'POST');

	var dateId = req.body.dateId,
		name = req.body.name;

	r.table(dateTable)
		.get(dateId)
		.update({
			participants: r.row("participants").append(name)
		})
		.run(connection, function (err, result) {
			if (err) throw err;

			lunchDateTodaysDatesList(res);
		});
});

app.post('/lunchdate/date/removeParticipant', function (req, res) {
	res.header('Access-Control-Allow-Origin', clientUrl);
	res.header('Access-Control-Allow-Methods', 'POST');

	var dateId = req.body.dateId,
		name = req.body.name;

	r.table(dateTable)
		.get(dateId)
		.update({
			participants: r.row("participants").filter(function (participant) {
				return participant.ne(name)
			})
		})
		.run(connection, function (err, result) {
			if (err) throw err;

			lunchDateTodaysDatesList(res);
		});
});
