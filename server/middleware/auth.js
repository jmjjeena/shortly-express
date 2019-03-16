const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
    if (!models.Sessions.isLoggedIn) {
        models.Sessions.create();
    }
    models.Sessions.get();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

