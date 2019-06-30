const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const url = require('url');
const http = require('http');
const request = require('request');
const querystring = require('querystring');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/get', function(req, res, next) {
    var API_URL = 'https://api.rasp.yandex.net/v3.0/schedule/';
    var API_KEY = '5bf744be-611d-4f1c-8dc1-b421c31fe85c';

    var STATION_ID = 's9600213';
    var TRANSPORT_TYPE = 'plane';

    var properties = {
        apikey: API_KEY,
        station: STATION_ID,
        transport_types: TRANSPORT_TYPE
    };

    var newUrl = 'https://api.rasp.yandex.net/v3.0/schedule/';
    req.pipe(request({
        method: 'GET',
        uri: newUrl,
        qs: properties
    })).pipe(res);
   /*var options = {
       host: 'api.rasp.yandex.net',
       port: 80,
       path: '/v3.0/schedule/?apikey=5bf744be-611d-4f1c-8dc1-b421c31fe85c&station=s9600213&transport_types=plane',
       method: 'GET',
       headers: req.headers
   };

   var proxy = http.request(options, function(proxy_result) {
       proxy_result.on('data', function(chunk) {
           res.write(chunk);
       });

       proxy_result.on('end', function() {
           // res.writeHead(proxy_result.statusCode);
           res.end();
       });
   }).on('error', function(e) {
       console.log(e.message);
       res.writeHead(500);
       res.end();
   });

   proxy.end();*/
});

app.listen(process.env.PORT || 8080);