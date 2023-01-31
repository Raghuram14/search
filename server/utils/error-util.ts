'use strict';

// NPM Packages
import { Response } from "express";

// Constant definitions
const errorConsts = {
    errorMessages: {
        GENERIC_INTERNAL_SERVER_ERROR_MSG: 'Internal server error',
        GENERIC_VALIDATION_ERROR_MSG: 'Some of the api input parameters are not valid',
        INVALID_API_TOKEN_ERROR_MSG: 'Auth Token is Not Valid',
        NO_TOKEN_PROVIDED_ERROR_MSG: 'A token is required for authentication'
    },
    errorCodes: {
        INVALID_API_TOKEN: 401,
        NO_TOKEN_PROVIDED: 403,
        API_VALIDATION_ERROR: 400,
        INTERNAL_SERVER_ERROR: 500,
    },
    errorTitles: {
        VALIDATION: 'validation_error',
        INVALID_API_TOKEN: 'Invalid Token',
        NO_TOKEN_PROVIDED: 'No Token Provided',
        INTERNAL_SERVER: 'Internal_Server_Error',
    }
};

/**
 * Sets the error response for every validation error.
 * @param {Object} res => API response.
 */
export const setValidationError = (res: Response, err: any) => {
    const response = {
        title: errorConsts.errorTitles.VALIDATION,
        detail: err || errorConsts.errorMessages.GENERIC_VALIDATION_ERROR_MSG
    };
    res.status(errorConsts.errorCodes.API_VALIDATION_ERROR).send(response);
};

/**
 * Sets the error response for every internal server error.
 * @param {Object} res => API response.
 * @param {String} err => error message.
 */
export const setInternalServerError = (res: Response, err: any) => {
    const response = {
        title: errorConsts.errorTitles.INTERNAL_SERVER,
        detail: err || errorConsts.errorMessages.GENERIC_INTERNAL_SERVER_ERROR_MSG
    };
    res.status(errorConsts.errorCodes.INTERNAL_SERVER_ERROR).send(response);
};
