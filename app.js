const express = require("express"),
	routes = require("./routes/routes.js"),
	bodyParser = require("body-parser"),
	passport = require("./passport.js"),
	flash = require("connect-flash");

let app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(require("client-sessions")({
	cookieName: "session",
	secret: process.env.SECRET,
	duration: 30 * 60 * 1000
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

app.listen(process.env.PORT || 3000, () => {
	console.log("Listening on port:", process.env.PORT);
	console.log(`http://localhost:${process.env.PORT}/`);
});

module.exports = app;