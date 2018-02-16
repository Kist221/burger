// requirement
var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burger.all(function(data) {
		var allBurgers = {
			burgers: data
		};
		console.log(allBurgers);
		res.render("index", allBurgers);
	});
});

router.post("/add", function(req, res) {
	var name = req.body.name.toString();
	console.log("THIS IS THE BODY: " + name);
	burger.insert(name, function(data) {
		console.log("Burger Added: " + req.body);
	});
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
});

// Export routes for server.js to use.
module.exports = router;