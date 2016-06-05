'use strict';

var Context = require('./context');

class Controller {
    constructor(ctx, endpoint, decoder, encoder, ...params) {
        this.ctx = new Context(ctx);
        this.endpoint = endpoint;
        this.decoder = decoder;
        this.encoder = encoder;
        // TODO(narqo@): Controller `params`
    }

    // TODO(narqo@): promisify me
    handleRequest(req, res) {
        console.log(`handle request ctx=${this.ctx.id}`);

        const inReq = this.decoder(req);
        const result = this.endpoint(this.ctx, inReq);

        return this.encoder(res, result);
    }
}

module.exports = Controller;
