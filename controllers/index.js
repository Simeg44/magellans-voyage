// var locations = require("./models/voyage.js");
var fs = require("fs");

var indexController = {
	// main: function(req, res) {
	// 	var locationPage = {
	// 			name: "Seville",
	// 			next: "Canary Islands",
	// 			path: "/canary",
	// 		};

	// 	res.render("index", {
	// 		name: locationPage.name,
	// 		next: locationPage.next,
	// 		path: locationPage.path,
	// 		object: {
	// 			location: locationPage.name,
	// 			nextLocation: locationPage.next
	// 		}
	// 	});
	// },
	index: function(req, res) {
		console.log(req.params.filename);
		// fs.readFile(req.params.filename, function(err, data) {
			var locationPage = {
				name: null,
				next: null,
				path: null,
			};
			var urlPath = req.params.filename;
			console.log("urlPath:", urlPath);
			
			switch(urlPath) {
				case " ": 
					locationPage.name ="Seville";
					locationPage.next ="Canary Islands";
					locationPage.path ="/canary";
				 	break;
				case "canary":
					locationPage.name = "Canary Islands";
					locationPage.next = "Cape Verde";
					locationPage.path = "/cape";
					break;
				case "cape":
					locationPage.name = "Cape Verde";
					locationPage.next = "Strait of Magellan";
					locationPage.path = "/strait";
					break;
				case "strait":
					locationPage.name = "Strait of Magellan";
					locationPage.next = "Guam";
					locationPage.path = "/guam";
					break;
				case "guam":
					locationPage.name = "Guam";
					locationPage.next = "Philippines";
					locationPage.path = "/philippines";
					break;
				case "philippines":
					locationPage.name = "Philippines";
					locationPage.next = "End";
					locationPage.path = "";
					break;
				default:
					locationPage.name = "Magellan did not travel to " + urlPath;
					locationPage.next = null;
					locationPage.path = null;

			}
			res.render("index", {
				name: locationPage.name,
				next: locationPage.next,
				path: locationPage.path,
				object: {
					location: locationPage.name,
					nextLocation: locationPage.next
				}
			})
		// });
	}
/*	canary: function(req, res) {
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
	}*/
};

module.exports = indexController;