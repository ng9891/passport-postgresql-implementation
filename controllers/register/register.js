const db = require('../../db_service.js');
const passport = require('passport');

const routeCallBack = (req, res)=>{
    res.redirect('/');
};

// Provides a callback function for express.Router.get()
module.exports = routeCallBack;