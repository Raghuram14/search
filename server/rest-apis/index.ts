'use strict';

import {searchRoutes} from './search';

const routes = (app: any) => {
    app.use('/v0/search', searchRoutes)
}

export {routes};