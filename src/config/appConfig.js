const _ = require('lodash');

let config = {
    port: process.env.PORT || 3000,
    dev: 'development',
    test: 'testing',
    prod: 'production'
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

let envConfig;
try {
    envConfig = require(`./${config.env}`);
    envConfig = envConfig || {};
} catch {
    envConfig = {};
}

module.exports = _.merge(config, envConfig);