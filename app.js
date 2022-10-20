require("dotenv").config()

const bodyParser = require("body-parser");
const express = require('express');
const app = module.exports = express();
const port = process.env.PORT;

const path = require("path");

const db = require("./models");

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use(bodyParser.json());

db.sequelize.sync().then((req) => {	
	app.listen(port, () => {
		console.log(`server running on port http://localhost:${port}`)
	});
});

module.exports.app = app;
routes = require("./routes");