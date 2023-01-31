'use strict';

import * as reqHanlders from './req-res-handler';
import logger from './logger'
import { InternalServerError, ValidationError } from './error-types';

export const utils = {
    logger: logger,
    resHanlder: reqHanlders.resHanlder,
    ValidationError: ValidationError,
    InternalServerError: InternalServerError,
}