const { Project, Task, User } = require("../models");

// Task - Get Controllers
exports.getTasks = async function(req, res) {
	const task = await Task.findAll();
	console.log(task.every(task => task instanceof Task));
	console.log("All Task: ", JSON.stringify(task, null, 2));
	res.json(task);
};

exports.getSingleTask = async function(req, res) {
	let id_params = req.params;
	let correct_params = id_params["projectId"];
	let singleTask;
	try {
		singleTask = await Task.findOne({
			where: {
				id: correct_params
			}
		});
	} catch (error) {
		console.error('Failed to retrieve data : ', error);
	}
	// res.send(singleTask);
	res.json(singleTask);
};


// Project - Get Controllers
exports.getProjects = async function(req, res) {
	const projects = await Project.findAll();
	// console.log(projects.every(project => project instanceof Project));
	// console.log("All Projects: ", JSON.stringify(projects, null, 2));
	res.json(projects);
};


exports.getSingleProject = async function(req, res) {
	let id_params = req.params;
	let correct_params = id_params["projectId"];
	let singleProject;
	try {
		singleProject = await Project.findOne({
			where: {
				id: correct_params
			}
		});
	} catch (error) {
		console.error('Failed to retrieve data : ', error);
	}
	// res.send(singleProject);
	res.json(singleProject);
};
