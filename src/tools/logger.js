require('colors');
const _ = require('lodash');
const config = require('../config/appConfig');

// used when logging is disable
const noop = function() {};

const consoleLog = config.logging ? 
  console.log.bind(console) :
  noop;

const logger = {
  log: function() {
    // arguments is an array like object with all the passed
    // in arguments to this fuction
    const args = _.toArray(arguments)
      .map(function(arg) {
        if (typeof arg === 'object') {
          return JSON.stringify(arg, 2).magenta;
        } else {
          arg += '';
          return arg.magenta;
        }
      }
    );

    consoleLog.apply(console, args);
  }
};

module.exports = logger;