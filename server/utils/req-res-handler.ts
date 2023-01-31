'use strict';

import { Response } from "express"

import { setInternalServerError, setValidationError } from "./error-util";
import { ValidationError } from "./error-types";

/**
 * Function to handle results which are sent to client
 * If the result contains error sends respective error status(400, 500) and error messages
 * @param {Request} req request object 
 * @param {JSON} result result containing data or error
 */
export const resHanlder = (res: Response, result: any) => {
    if (result.error) {
        const error = result.error;
        if (error instanceof ValidationError)
            return setValidationError(res, error)
        else
            return setInternalServerError(res, error)
    } else {
        return res.status(200).send(result.data)
    }
}
