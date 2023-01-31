'use strict';

import { Request } from "express"
import { utils } from "../../../utils";

const ValidationError = utils.ValidationError;

/**
 * Method to get the search details for the search request
 * @param {Request} req request details
 * @returns {Object} JSON with success and error response
 */
export const getSearchDetails = async (req: Request) => {
    try {
        const searchParam = req.params.searchParam;
        if (!searchParam)
            throw new ValidationError('Invalid search param');
        return ({
            data: 'success',
            error: null,
        })
    } catch (Error) {
        return ({
            data: null,
            error: Error,
        })
    }
}