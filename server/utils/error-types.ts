'use strict';

class ErrorClass extends Error {
    params: Object;
    type: String;

    constructor (...args: any) {
        super(...args);
        this.params = args.shift();
        this.type = 'Error';
        Error.captureStackTrace(this, this.constructor);
    }
}

export class InternalServerError extends ErrorClass {
    constructor (...args: any) {
        super(...args);
        this.type = 'InternalServerError';
    }
}

export class ValidationError extends ErrorClass {
    constructor (...args: any) {
        super(...args);
        this.type = 'ValidationError';
    }
}