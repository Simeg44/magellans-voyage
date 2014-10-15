// var locations = require("./models/voyage.js");

var indexController = {
	index: function(req, res) {
		res.render('index')
	},
	canary: function(req, res) {
		res.render("canary");
	},
	cape: function(req, res) {
		res.render("cape");
	},
	strait: function(req, res) {
		res.render("strait");
	},
	guam: function(req, res) {
		res.render("guam");
	},
	philippines: function(req, res) {
		res.render("philippines");
	}
};

module.exports = indexController;