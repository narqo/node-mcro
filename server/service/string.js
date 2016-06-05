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

    padStart(s, sLen, padS = ' ') {
        // `String.prototype.padStart` anyone?
        if (sLen < s.length) {
            return s;
        }
        let res = '';
        while (true) {
            if (sLen & 1) {
                res += padS;
            }
            sLen >>= 1;
            if (sLen) {
                padS += padS;
            }
            else break;
        }
        return res + s;
    }
}

module.exports = StringService;
