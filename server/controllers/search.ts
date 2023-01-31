'use strict';

import { Request, Response } from 'express';
import { searchServices } from '../modules/search-content';
import {utils} from '../utils';

/**
 * Method to get the search details for the search request
 * @param {Request} req request details
 * @returns {Object} object with success and error response
 */
export const getSearchDetails = async (req: Request, res: Response) => {
    const result = await searchServices.getSearchDetails(req.body);     
    return utils.resHanlder(res, result);
}