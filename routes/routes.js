// File containing all the routes and redirects to controller.
const express = require("express");

const router = express.Router();

// Controllers
let login_get = require("../controllers/login/login_get");
let login = require("../controllers/login/login"); // POST
let register_get = require("../controllers/register/register_get");
let register = require("../controllers/register/register"); // POST
let landing = require("../controllers/landing");
let logout = require("../controllers/logout");

// Routes
router.get("/login", login_get);
router.post("/login", login);

router.get("/register", register_get);
router.post("/register", register);

router.get("/logout", logout);

router.get("*", landing);

module.exports = router;