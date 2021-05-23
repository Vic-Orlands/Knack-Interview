const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/knack',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
};