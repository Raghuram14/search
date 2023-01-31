'use strict';

// NPM Packages
import bodyParser from 'body-parser';
import express from 'express';
import {config} from './config';
import { routes } from './rest-apis';

// cerate express server
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize the routes
routes(app);

// Start the server
const port = config.port || 3030;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
})

export default app;
  