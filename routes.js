const { app } = require("./app");
let siteController = require("./controllers/site");
let getController = require("./controllers/gets");
let postController = require("./controllers/posts");
const path = require("path");

// const { Project } = require("./models");

app.get('/', siteController.index);

app.get('/about', siteController.about);

app.post('/newproject', postController.newProject);
// app.post('/newproject', function(req, res) {
// 	res.json(req.body);
// });

app.get('/getAllProjects', getController.getProjects);

app.get('/getProject/:projectId', getController.getSingleProject);

app.post('/newuser', postController.newUser);

app.post('/deleteProject', postController.deleteProject);

app.get('/home', (req, res) => {
	res.sendFile(path.join(__dirname, '/views/about.html'));
});
