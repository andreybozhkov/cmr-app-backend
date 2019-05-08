const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
//const passport = require('passport');

module.exports = app => {
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
        secret: 'ga21JqFLCX',
        resave: false,
        saveUninitialized: false
    }));
    //app.use(passport.initialize());
    //app.use(passport.session());
};