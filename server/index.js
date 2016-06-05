'use strict';

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var requestTracer = require('./middleware/tracer');
var requestDispatcher = require('./dispatcher');

const server = express();
server.disable('x-powered-by');
server.enable('trust proxy');

server.use(requestTracer());

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cookieParser());

const decodeReq = req => req.body;
const encodeRes = (res, data) => res.end(JSON.stringify(data));

server.use(requestDispatcher(decodeReq, encodeRes));

const port = process.env.PORT;

server.listen(port, err => {
    if (err) {
        console.error(err);
    }
    console.log(`listening on port=${port}`);
});

module.exports = server;
