const routeCallBack = (req, res) => {
	res.render("../views/login.ejs");
};

// Provides a callback function for express.Router.get()
module.exports = routeCallBack;