'use strict';

var jsonStringify = require('json-stringify-safe');
var Context = require('../../lib/context');

module.exports = () => function requestTracer(req, res, next) {
    const ctx = req.ctx = new Context();

    ctx.start();

    res.once('finish', done);
    res.once('error', cleanup);
    res.once('close', cleanup);

    function done() {
        ctx.stop();
        console.error('tracer:', jsonStringify(req.ctx, null, 2));
    }

    function cleanup() {
        res.removeEventListener('finish', done);
        res.removeEventListener('error', cleanup);
        res.removeEventListener('close', cleanup);
    }

    next();
};
