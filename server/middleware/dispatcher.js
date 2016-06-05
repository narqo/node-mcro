'use strict';

var Controller = require('../lib/controller');
var Context = require('../lib/context');
var endpoints = require('../endpoints');
var StringService = require('../service/string');

module.exports = (decodeReq, encodeRes) => function requestDispatcher(req, res, next) {
    const ctx = req.ctx;
    const stringSvc = new StringService();

    const uppercaseCtrl = new Controller(
        ctx,
        endpoints.createUpperCaseEndpoint(stringSvc),
        decodeReq,
        encodeRes
    );

    const sizeCtrl = new Controller(
        ctx,
        endpoints.createSizeEndpoint(stringSvc),
        decodeReq,
        encodeRes
    );

    let controller;

    switch (req.url) {
    case '/uppercase':
        controller = uppercaseCtrl;
        break;

    case '/size':
        controller = sizeCtrl;
        break;
    }

    if (controller) {
        controller.handleRequest(req, res);
    } else {
        next(new Error('not found'));
    }
};
