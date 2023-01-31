'use strict';

// NPM Packages
import {Router, Request, Response, NextFunction} from 'express';

// Internal modules
import { utils } from '../utils';
import { controllers } from '../controllers';
const router = Router();

// Constant definitions
const logger = utils.logger;

/**
 * REST end point to get search details
 * @param {Request} req request details containing search param
 * @param {Response} res response
 */
router.get('/:searchParam', (req: Request, res: Response) => {
    try {
        return controllers.getSearchDetails(req, res);
    } catch (Error) {
        const errMsg = 'Something went wrong while getting search details, please try again after sometime.'
        logger.error("Something went wrong while getting search details.", Error);
        res.status(500).send(errMsg);
    }
    return 
})

// module.exports = router;
export {router as searchRoutes}