'use strict';

class ErrEmpty extends Error {
    constructor() {
        super();
        this.message = 'Empty string';
    }
}

class StringService {
    uppercase(s) {
        if (typeof s !== 'string' || !s.length) {
            throw new ErrEmpty();
        }
        return s.toUpperCase();
    }

    size(s) {
        return s.length;
    }
}

module.exports = StringService;
