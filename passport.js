const     passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    pgpassport = require('passport-local-postgres'),
    db = require('./db_service.js');

    passport.use(new LocalStrategy((username,password, done)=>{
        let query = `
            SELECT id, username, password
            FROM users
            WHERE username = $1;
        `;
        let values = [];
        values.push(username);

        db.transQuery(query,username,(err, data)=>{
            if(err) return done(err);
            if(data.rows[0] == null) return done(null, false, { message: 'Incorrect username or password'});

            return done(done, data.rows[0].username);
        });
    }));

module.exports = passport;