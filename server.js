const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const url = require('url');
const http = require('http');
const request = require('request');
const querystring = require('querystring');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

var API_URL = 'https://api.rasp.yandex.net/v3.0/schedule/';
var API_KEY = '5bf744be-611d-4f1c-8dc1-b421c31fe85c';

var STATION_ID = 's9623052';
var TRANSPORT_TYPE = 'plane';

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/departure', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/departure', function(req, res, next) {
    var date = new Date();
    var dateFormat = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    var properties = {
        apikey: API_KEY,
        station: STATION_ID,
        transport_types: TRANSPORT_TYPE,
        event: 'departure',
        date: dateFormat
    };

    var newUrl = 'https://api.rasp.yandex.net/v3.0/schedule/';
    req.pipe(request({
        method: 'GET',
        uri: newUrl,
        qs: properties
    })).pipe(res);
});

app.get('/api/arrival', function(req, res, next) {
    var date = new Date();
    var dateFormat = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    var properties = {
        apikey: API_KEY,
        station: STATION_ID,
        transport_types: TRANSPORT_TYPE,
        event: 'arrival',
        date: dateFormat
    };

    var newUrl = 'https://api.rasp.yandex.net/v3.0/schedule/';
    req.pipe(request({
        method: 'GET',
        uri: newUrl,
        qs: properties
    })).pipe(res);
});

app.listen(process.env.PORT || 8080);