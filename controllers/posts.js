const { Task, User } = require("../models");
// const  = require("../models")

// Task - Post Controllers
exports.newTask = function(req, res) {
	const { tasktitle, taskdescription, hours, minutes, seconds } = req.body;
	
	Task.create({
		taskTitle: tasktitle,
		taskDescription: taskdescription,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	}).catch((err) => {
		console.log(err);
	});

	res.json(req.body);
};

exports.deleteTask = function(req, res) {
	const { task_id } = req.body;
	
	Task.destroy({
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


// Project - Post Controllers
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

exports.deleteProject = function(req, res) {
	const { task_id } = req.body;
	
	Task.destroy({
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


// User - Post Controllers
exports.newUser = function(req, res) {
	User.create({
		firstName: "Dean",
		age: 18,
	}).catch((err) => {
		console.log(err);
	});

	res.send('New User');
};
