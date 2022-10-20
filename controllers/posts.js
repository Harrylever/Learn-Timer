const { Project, User } = require("../models");
// const  = require("../models")

exports.newProject = function(req, res) {
	const { tasktitle, taskdescription } = req.body;
	
	Project.create({
		projectTitle: tasktitle,
		projectDescription: taskdescription,
	}).catch((err) => {
		console.log(err);
	});

	res.json(req.body);
};

exports.newTask = function(req, res) {
	const { tasktitle, taskdescription } = req.body;
	
	Project.create({
		projectTitle: tasktitle,
		projectDescription: taskdescription,
	}).catch((err) => {
		console.log(err);
	});

	res.json(req.body);
};

exports.getProjects = async function(req, res) {
	const projects = await Project.findAll();
	console.log(projects.every(project => project instanceof Project));
	console.log("All Projects: ", JSON.stringify(projects, null, 2));
	res.json(projects);
};

exports.newUser = function(req, res) {
	User.create({
		firstName: "Dean",
		age: 18,
	}).catch((err) => {
		console.log(err);
	});

	res.send('New User');
};

exports.deleteProject = function(req, res) {
	const { task_id } = req.body;
	
	Project.destroy({
		where: {
			id: task_id
		}
	}).then(() => {
		console.log("Successfully deleted record.");
		res.json('Successfully deleted record.');
	}).catch((error) => {
		console.error("Failed to delete record: ", error);
	});
};