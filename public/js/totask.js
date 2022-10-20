const save_task = () => {
	let task_title = $('#task_title_input').val();
	let task_description = $('#task_description_input').val();
	// console.log(task_title);
	// console.log(task_description);

	axios({
		method: 'post',
		url: '/newproject',
		data: {
			tasktitle: task_title, 
			taskdescription: task_description,
		}
	}).then((response) => {
		console.log("Successfully Added Project!");
	}).catch((err) => {
		console.log("Error:");
		console.log(err);
	})
};

$('#save-btn').click(function (e) {
	// e.preventDefault();
	try {
		save_task();
	} catch (error) {
		console.log(error);
	}
});
