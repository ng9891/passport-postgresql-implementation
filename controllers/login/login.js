const passport = require("passport");
const routeCallBack = (req, res, next) => {
	// Custom Callback taken from passport docs
	passport.authenticate("local", (err, user) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.send("no user");
		}

		req.logIn(user, (err) => {
			if (err) {
				return next(err);
			}
			req.session.user = user.id; // Sets session identifier
			return res.redirect("/");
		});
	})(req, res, next);
};

// Provides a callback function for express.Router.get()
module.exports = routeCallBack;