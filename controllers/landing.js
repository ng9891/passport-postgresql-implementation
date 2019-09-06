const routeCallBack = (req, res) => {
	if (req.session && req.session.user) {
		res.render("../views/landing.ejs", {
			data: "logged in"
		});
	} else {
		res.render("../views/landing.ejs", {
			data: "NOT logged in"
		});
	}
};

module.exports = routeCallBack;