module.exports = function (app, r, connection, clientUrl, table) {
    function lunchDatePlaceList(res) {
        r.table(table)
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

        r.table(table)
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

        r.table(table)
            .get(id)
            .delete()
            .run(connection, function (err, result) {
                if (err) throw err;

                lunchDatePlaceList(res);
            });
    });
}
