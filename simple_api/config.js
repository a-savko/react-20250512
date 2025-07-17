// Load environment variables
require('dotenv').config();

// Environment configuration
const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3001,
    HOST: process.env.HOST || 'localhost',
    API_RESPONSE_DELAY: process.env.API_RESPONSE_DELAY ? parseInt(process.env.API_RESPONSE_DELAY, 10) : null,

    // Computed values
    get isProduction() {
        return this.NODE_ENV === 'production';
    },

    get isDevelopment() {
        return this.NODE_ENV === 'development';
    },

    get isStaging() {
        return this.NODE_ENV === 'staging';
    },

    get responseDelay() {
        if (this.API_RESPONSE_DELAY !== null) {
            return this.API_RESPONSE_DELAY;
        }
        // Default: delay in development, no delay in production
        return this.isProduction ? 0 : 3000;
    }
};

module.exports = config;
