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

    handleRequest(req, res) {
        console.log(`controller: handle request ctx=${this.ctx.id}`);

        const result = new Promise((resolve, reject) => {
            const inReq = this.decoder(req);
        
            let result;
            
            try {
                resolve(this.endpoint(this.ctx, inReq));
            } catch (err) {
                reject(err);
            }
        });
            
        return result.then(result => this.encoder(res, result));
    }
}

module.exports = Controller;
