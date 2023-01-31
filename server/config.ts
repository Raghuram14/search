'use strict';

// NPM Packages
import dotenv from 'dotenv'

// Internal packages 
import contentSeedData from './seed-data.json';

// read env file content
dotenv.config()

export const config = {    
    tz: process.env.TZ,
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
    contentSeedData: contentSeedData,
}