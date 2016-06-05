'use strict';

var Controller = require('../lib/controller');
var Context = require('../lib/context');
var endpoints = require('./endpoints');
var StringService = require('./service/string');

module.exports = (decodeReq, encodeRes) => function requestDispatcher(req, res, next) {
    const stringSvc = new StringService();
    let endpoint;

    switch (req.url) {
    case '/uppercase':
        endpoint = endpoints.createUpperCaseEndpoint(stringSvc);
        break;

    case '/len':
        endpoint = endpoints.createLenEndpoint(stringSvc);
        break;

    case '/padstart':
        endpoint = endpoints.createPadStartEndpoint(stringSvc);
        break;
    }

    if (endpoint) {
        const ctx = req.ctx;
        let controller = new Controller(ctx, endpoint, decodeReq, encodeRes);
        
        controller.handleRequest(req, res).catch(next);
    } else {
        next(new Error('not found'));
    }
};
