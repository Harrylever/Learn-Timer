// get DOM objects
// Task Timer Control Objects
let free_countin_btn = document.getElementById("free-counting-btn");
let proj_start_countin_btn = document.getElementById("proj-start-countin-btn");
let proj_pause_countin_btn = document.getElementById("proj-pause-countin-btn");
let proj_store_progress_btn = document.getElementById("proj-store-progress-btn");
// let proj_reset_countin_btn = document.getElementById("proj-reset-countin-btn");
let free_counting_btn_change_text = document.getElementById("free-counting-btn-change-text");

// Add-Task Modal Objects
let save_btn = document.getElementById("save-btn");
let task_title_input = document.getElementById("task_title_input");
let task_description_input = document.getElementById("task_description_input");
let task_acc_time_hours = document.getElementById("estimated_time_hours");
let task_acc_time_minutes = document.getElementById("estimated_time_minutes");
let task_acc_time_seconds = document.getElementById("estimated_time_seconds");
// let lt_note_section_note_text = document.getElementById("lt-note-section-note-text");
// let task_progress_list = document.getElementById("task-progress-list-container-id");


// Delete Modal Objects
let cancel_del_btn = document.getElementById("f-r-s-modal-cancel-btn");

// Timer DOM objects
let time_second_count = document.getElementById("time-second-count");
let time_minute_count = document.getElementById("time-minute-count");
let time_hour_count = document.getElementById("time-hour-count");

// Task List Section
let refresh_btn = document.getElementById("refresh-btn");
let task_progress_list_container_id = document.getElementById("task-progress-list-container-id");

// Task Description Section
let lt_note_section_note_body_content = document.getElementById("lt-note-section-note-body-content");
let task_description_loader = document.getElementById("task-description-loader");
let lt_task_title_text = document.getElementById("lt-task-title-text");
let lt_task_created_time = document.getElementById("lt-task-created-time");
let lt_task_description_text = document.getElementById("lt-task-description-text");

// Error DOM Import
let task_title_error = document.getElementById("task-title-error");
let task_description_error = document.getElementById("task-description-error");

// Success DOM Import
let task_success = document.getElementById("task-success");

let function_active_checker = "dead";

// Timer Constructor
class Timer {
	constructor(seconds, minutes, hours) {
		this.seconds = seconds,
		this.minutes = minutes,
		this.hours = hours
	}
}

let first_timer_free = new Timer(0, 0, 0);
let proj_timer = new Timer(0, 0, 0);

// Free Counter
function start_counter() {
	first_timer_free.seconds = 1;
	// console.log(first_timer_free);
	function_active_checker = "active";
	time_minute_count.innerHTML = "00";
	time_second_count.innerHTML = "00";
	free_counting_btn_change_text.innerHTML = "Clear";
	let time_increment = setInterval(function () {
		if (first_timer_free.seconds > 59) {
			first_timer_free.minutes += 1;
			first_timer_free.seconds = 0;
		}
		// console.log(`hello ${first_timer_free.seconds}`);
		time_minute_count.innerHTML = first_timer_free.minutes < 10 ? `0${first_timer_free.minutes.toLocaleString()}` : `${first_timer_free.minutes.toLocaleString()}`;
		time_second_count.innerHTML = first_timer_free.seconds < 10 ? `0${first_timer_free.seconds.toLocaleString()}` : `${first_timer_free.seconds.toLocaleString()}`;
		first_timer_free.seconds++;

		if (function_active_checker == "dead") {
			free_counting_btn_change_text.innerHTML = "Start";
			first_timer_free.seconds = 1;
			first_timer_free.minutes = 0;
			// console.log(first_timer_free);
			clearInterval(time_increment);
		}
	}, 1000);
}

function proj_counter() {
	proj_timer.seconds = 1;
}

async function add_progress_list() {
	while (task_progress_list_container_id.hasChildNodes()) {
		task_progress_list_container_id.removeChild(task_progress_list_container_id.firstChild);
	}
	await fetch("/getAllTask")
		.then((response) => response.json())
		.then((data) => {
			let data2 = data;
			for (let i = 0; i < data2.length; i++) {
				let div_container = document.createElement("div");
				let button_node = document.createElement("button");
				button_node.id = `project-id-${data2[i]["id"]}`;
				button_node.className = "single-task-button";
				let data_text_cont = document.createElement("h3");
				let del_btn = document.createElement("button");
				del_btn.className = "single-task-del-btn";
				del_btn.id = `task-id-${data2[i]["id"]}`;
				let del_node_image = document.createElement("img");
				del_node_image.src = "images/icons8-trash-can.png";
				del_btn.appendChild(del_node_image);
				let textnode = document.createTextNode(data2[i]["taskTitle"]);
				data_text_cont.appendChild(textnode);
				button_node.appendChild(data_text_cont);
				div_container.appendChild(button_node);
				div_container.appendChild(del_btn);
				task_progress_list_container_id.appendChild(div_container);
			}
		});
} 

function set_estimated_timer() {
	let task_acc_time_hrs = parseInt(task_acc_time_hours.value);
	let task_acc_time_mnts = parseInt(task_acc_time_minutes.value);
	let task_acc_time_scnds = parseInt(task_acc_time_seconds.value);
	
	let total_seconds_score_hrs = parseInt(task_acc_time_hrs);
	let total_seconds_score_mnts = parseInt(task_acc_time_mnts);

	let total_seconds_score = total_seconds_score_hrs + total_seconds_score_mnts + parseInt(task_acc_time_scnds);

	let hours_time_2_b_display = total_seconds_score_hrs > 1 ? `${total_seconds_score_hrs} Hrs` : `${total_seconds_score_hrs} Hr`;
	let minutes_time_2_b_display = total_seconds_score_mnts > 1 ? `${total_seconds_score_mnts} Mins` : `${total_seconds_score_mnts} Min`;
	let seconds_time_2_b_display = parseInt(task_acc_time_scnds) > 1 ? `${parseInt(task_acc_time_scnds)} Secs'` : `${parseInt(task_acc_time_scnds)} Sec`;

	let time_2_b_display = `${hours_time_2_b_display} ${minutes_time_2_b_display} & ${seconds_time_2_b_display}`;
	// console.log(time_2_b_display);


	return {
		task_acc_time_hrs,
		task_acc_time_mnts,
		task_acc_time_scnds,
		total_seconds_score,
		time_2_b_display
	}
}

function setTimeDisplay(time_display) {
	let time_display_input = document.getElementById("time_display_input");
	time_display_input.value = time_display;
}

task_acc_time_hours.addEventListener("change", (event) => {
	if (event.target.value > 20) {
		event.target.value = 20;
	}
	setTimeDisplay(set_estimated_timer().time_2_b_display);
});

task_acc_time_minutes.addEventListener("change", (event) => {
	if (event.target.value > 59) {
		event.target.value = 59;
	}
	setTimeDisplay(set_estimated_timer().time_2_b_display);
});

task_acc_time_seconds.addEventListener("change", (event) => {
	if (event.target.value > 59) {
		event.target.value = 59;
	}
	setTimeDisplay(set_estimated_timer().time_2_b_display);
});

async function save_task() {
	let task_title = $('#task_title_input').val();
	let task_description = $('#task_description_input').val();
	let estimated_timer_hrs = set_estimated_timer().task_acc_time_hrs;
	let estimated_timer_mnts = set_estimated_timer().task_acc_time_mnts;
	let estimated_timer_scnds = set_estimated_timer().task_acc_time_scnds;
	// let estimated_timer = parseInt(estimated_timer_hrs) + parseInt(estimated_timer_mnts) + parseInt(estimated_timer_scnds);

	// console.log(estimated_timer);

	if (task_title.length < 4 || task_description.length < 6) {
		if (task_title.length < 4) {
			task_title_error.style.display = "block";
			setTimeout(() => {
				task_title_error.style.display = "none";
			}, 4000);
		}
		if (task_description.length < 6) {
			task_description_error.style.display = "block";
			setTimeout(() => {
				task_description_error.style.display = "none";
			}, 4000);
		}
		return "Error: Improper Task Title/Description";
	}

	let data = {
		tasktitle: task_title,
		taskdescription: task_description,
		hours: estimated_timer_hrs,
		minutes: estimated_timer_mnts,
		seconds: estimated_timer_scnds,
	}

	try {
		const fetchData = await fetch('/newtask', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const dataM = fetchData.json();
		console.log(dataM);
		console.log('Task Successfully Added');
		task_success.style.display = "block";
		setTimeout(() => {
			modal.style.top = "-50%";
			modal.style.transition = "1.3s";
			modal_container.style.top = "-100%";
			task_title_input.value = "";
			task_description_input.value = "";
			task_success.style.display = "none";
		}, 3000);
	} catch (err) {
		console.error('Error:', err);
	};
	return "Project Added Successfuly: Done";
}


function fetchToDisplayTaskDesc(id) {
	task_description_loader.style.display = "block";
	let task_id = id;

	fetch(`/getTask/${task_id}`)
	.then((response) => response.json())
	.then((data) => {
		let content_data = data;
		function changeText() {
			lt_task_title_text.innerHTML = content_data["taskTitle"];
			lt_task_description_text.innerHTML = content_data["taskDescription"];
			let date_data1 = content_data["createdAt"].slice(0, 10);
			let date_data2 = content_data["createdAt"].slice(11, 19);
			let date_data3 = date_data1 + " " + date_data2;
			lt_task_created_time.innerHTML = moment(date_data3).format('lll');
		}
		setTimeout(() => {
			task_description_loader.style.display = "none";
			changeText();
		}, 1200);
	}).catch((err) => {
		console.log("Error:");
		console.error(err);
	});
}

async function delTaskContent(id) {
	let task_id = id;
	let	data = { task_id: task_id }

	try {
		const fetchData = await fetch(`/deleteTask`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const dataM = fetchData.json();
		console.log(dataM);
		console.log(`Record ${task_id} Successfully Deleted!`);
		
		hideDelModal();
		add_progress_list();
		refresh_btn.disabled = true;
		setTimeout(() => {
			refresh_btn.disabled = false;
			getArrDivContent();
		}, 2000);
	} catch (err) {
		console.log(err);
	};
}


/*
 * Modal Controllers
 * Add Task and Save Modal
 * Confirm and Delete Task Modal
 * Create
 */ 
function displayDelModal(title_text, id) {
	let modal_container = document.getElementById("f-r-s-modal-container");
	let modal = document.getElementById("f-r-s-modal");
	let modal_title_text = document.getElementById("confirm-del-modal-title-text");
	let confirm_del_btn = document.getElementById("f-r-s-modal-confirm-del-btn");

	modal_title_text.innerHTML = title_text;
	modal.style.top = "20%";
	modal.style.transition = "1.2s";
	modal_container.style.top = "0%";
	confirm_del_btn.addEventListener("click", () => {
		delTaskContent(id);
	});
}

function hideDelModal() {
	let modal_container = document.getElementById("f-r-s-modal-container");
	let modal = document.getElementById("f-r-s-modal");
	let modal_title_text = document.getElementById("confirm-del-modal-title-text");

	modal.style.top = "-20%";
	modal.style.transition = "1.3s";
	modal_container.style.top = "-100%";
	setTimeout(() => {
		modal_title_text.innerHTML = "";
	}, 1400);
}

function getArrDivContent() {
	let arrDivContent = document.querySelectorAll("#task-progress-list-container-id div .single-task-button");
	let arrDivDelContent = document.querySelectorAll("#task-progress-list-container-id div .single-task-del-btn");

	for (let i = 0; i < arrDivContent.length; i++) {
		let child_0 = arrDivContent[i];
		// console.log(child);
		let child_id_0 = child_0.id;
		child_0.addEventListener("click", () => {
			fetchToDisplayTaskDesc(child_id_0.slice(11));
		});
	}

	for (let i = 0; i < arrDivDelContent.length; i++) {
		let child = arrDivDelContent[i];
		// console.log(child);
		let child_id = child.id;
		child.addEventListener("click", () => {
			let title_text = child.parentElement.childNodes[0].firstChild.innerHTML;
			displayDelModal(title_text, child_id.slice(11));
		});
	}
}

/* Control Functions */
// Free Counting Button Onclick Function
free_countin_btn.addEventListener('click', () => {
	if (function_active_checker == "dead") {
		start_counter();
	}
	else {
		function_active_checker = "dead";
	}
});


// Normal Start Counting Button Onclick Function
proj_start_countin_btn.addEventListener('click', () => {
	proj_counter();
});

refresh_btn.addEventListener("click", () => {
	add_progress_list();
	refresh_btn.disabled = true;
	setTimeout(() => {
		refresh_btn.disabled = false;
		getArrDivContent();
	}, 2000)
});

/*
 * Disabled Temporarily
 */
// window.addEventListener("load", () => {
// 	add_progress_list();
// });


save_btn.addEventListener("click", (e) => {
	e.preventDefault();
	try {
		console.log(save_task());
	} catch (error) {
		console.log(error);
	}
});

cancel_del_btn.addEventListener("click", () => {
	hideDelModal();
});
