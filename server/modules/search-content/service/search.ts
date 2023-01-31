'use strict';

import { utils } from "../../../utils";
import { getContentDetails } from "../models/search-content";
const ValidationError = utils.ValidationError;

/**
 * Method to get the search details for the search request
 * @param {Request} req request details
 * @returns {Object} JSON with success and error response
 */
export const getSearchDetails = async (req: any) => {
    try {
        // If search param is not found throw error
        
        let searchParam = req.searchParam;
        if (!searchParam)
            throw new ValidationError('Invalid search param');


        // Find the params which has double quotation
        const query = searchParam.match(/(?:"[^"]*"|^[^"]*$)/)[0].replace(/"/g, "");

        // Get content details for the search param 
        const response = getContentDetails(query);

        return ({
            data: response,
            error: null,
        })
    } catch (Error) {
        return ({
            data: null,
            error: Error,
        })
    }
}