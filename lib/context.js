'use strict';

var uuid = require('node-uuid');

function generateId() {
    return uuid.v1();
}

function log(ctx, time) {
    const diff = process.hrtime(time);
    console.log('context: id=%s, parent=%s, time=%d', ctx.id, ctx.parentId, diff[0] * 1e9 + diff[1]);
}

class Context {
    constructor(parent) {
        this._ended = false;

        this.id = generateId();
        this.parentId = parent ? parent.id : 0;
        this.parent = parent;

        this.children = [];
        if (parent) parent.children.push(this);

        this.records = new Map();
    }

    start() {
        if (this._ended) return;

        const time = process.hrtime();
        this.records.set(this.id, { time });
    }

    stop() {
        this._ended = true;

        const time = this.records.get(this.id).time;
        log(this, time);
    }
}

module.exports = Context;
