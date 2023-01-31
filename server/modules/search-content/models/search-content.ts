'use strict';

// Get seed data
import { config } from "../../../config";
const contentSeedData = config.contentSeedData;

// Content details
interface Content {
    name: string;
    image: string;
    description: string;
    dateLastEdited: string;
}

export const getContentDetails = (query: string): Content[] => {
    query = query.toLowerCase();
    
    return contentSeedData.filter(content => {
        const {name, description} = content;
        if (name.toLowerCase().includes(query) || description.toLowerCase().includes(query))
            return content
    });
}