'use strict';

const toSvcString = data => data.s;

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

    return { err, result };
};

const createUpperCaseEndpoint = svc => (ctx, data) => {
    const { err, result } = invokeSvc(ctx, svc, 'uppercase', toSvcString(data));
    return fromSvcResult(err, result);
};

const createLenEndpoint = svc => (ctx, data) => {
    const { err, result } = invokeSvc(ctx, svc, 'size', toSvcString(data));
    return fromSvcResult(err, result);
};

const createPadStartEndpoint = svc => (ctx, data) => {
    const str = toSvcString(data);
    const { len, sample } = data;
    const { err, result } = invokeSvc(ctx, svc, 'padStart', str, len, sample);
    return fromSvcResult(err, result);
};

module.exports = {
    createUpperCaseEndpoint,
    createLenEndpoint,
    createPadStartEndpoint,
};
