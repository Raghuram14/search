'use strict';

// NPM Packages
import dotenv from 'dotenv'

// read env file content
dotenv.config()

const config = {    
    tz: process.env.TZ,
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
}
export {config};