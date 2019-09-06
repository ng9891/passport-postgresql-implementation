const passport = require("passport"),
	LocalStrategy = require("passport-local").Strategy,
	db = require("./db_service.js");

passport.use(new LocalStrategy((username, password, done) => {
	let query = `
            SELECT id, username, password, email
            FROM users
			WHERE username = $1
			OR email = $1
			LIMIT 1;
        `;
	let values = [];
	values.push(username);

	db.transQuery(query, values, (err, data) => {
		if (err) {
			console.log("error selecting user");
			return done(err);
		}

		if (data.rows.length < 1) {
			return done(null, false, {
				message: "No username found"
			});
		} else {
			let user = data.rows[0];

			if (user.password !== password) { // TODO: Need bcrypt
				return done(null, false, {
					message: "Incorrect password"
				});
			}

			return done(null, data.rows[0]);
		}
	});
}));

passport.serializeUser((user, done) => {
	return done(null, user.id);
});

passport.deserializeUser((id, done) => {
	let query = `
            SELECT id, username, password
            FROM users
            WHERE id = $1;
        `;
	let values = [];
	values.push(parseInt(id, 10));

	// console.log(query, values);
	db.transQuery(query, values, (err, data) => {
		if (data.length === 0) {
			return done(err);
		}
		return done(null, data.rows[0]);
	});
});

module.exports = passport;