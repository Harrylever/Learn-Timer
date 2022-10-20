const path = require("path");

exports.index = function(req, res) {
	res.sendFile(path.join(__dirname, '../views/index.html'))
};

exports.about = function(req, res) {
	res.sendFile(path.join(__dirname, '../views/about.html'))
};
