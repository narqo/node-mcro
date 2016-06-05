'use strict';

const toSvcArgs = data => data.s;

const fromSvcResult = (err, result = '') => ({ result, error: err });

const invokeSvc = (ctx, svc, method, ...args) => {
    let err = null, result;

    try {
        ctx.start();
        result = svc[method].apply(svc, args);
    } catch (err_) {
        err = err_;
    } finally {
        ctx.stop();
    }

    return [err, result];
};

const createUpperCaseEndpoint = svc => (ctx, req) => {
    const [err, result] = invokeSvc(ctx, svc, 'uppercase', toSvcArgs(req));
    return fromSvcResult(err, result);
};

const createSizeEndpoint = svc => (ctx, req) => {
    const [err, result] = invokeSvc(ctx, svc, 'size', toSvcArgs(req));
    return fromSvcResult(err, result);
};

module.exports = {
    createUpperCaseEndpoint,
    createSizeEndpoint,
};
