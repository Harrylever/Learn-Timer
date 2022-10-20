let modal_cls_btn = document.getElementById("modal-cls-btn");
let modal_cls_btn_2 = document.getElementById("modal-cls-btn-2");
let modal_container = document.getElementById("modal-container");
let modal = document.getElementById("myModal");
let display_modal_btn = document.getElementById("proj-start-countin-btn");
// let cls_save_btn = document.getElementById("save-btn");

const hideModal = () => {
	modal.style.top = "-50%";
	modal.style.transition = "1.3s";
	modal_container.style.top = "-100%";
	// console.log("Modal Closed");
};

const showModal = () => {
	modal.style.top = "50%";
	modal.style.transition = "1.2s";
	modal_container.style.top = "0%";
	// console.log("Modal Opened")
}

modal_cls_btn.addEventListener("click", () => {
	hideModal();
});
modal_cls_btn_2.addEventListener("click", () => {
	hideModal();
});

display_modal_btn.addEventListener("click", () => {
	showModal();
});

// cls_save_btn.addEventListener("click", () => {
// 	// e.preventDefault();
// 	let task_title = $('#task_title_input').val();
// 	let task_description = $('#task_description_input').val();

// 	if (task_title.length < 4 || task_description.length < 6) {
// 		// console.log("Error: Improper Task Title/Description");
// 		return "Error: Improper Task Title/Description"
// 	}

// 	setTimeout(() => {
// 		console.log("Save Button Clicked From Modal.js");
// 		hideModal();
// 		task_title = "";
// 		task_description = "";
// 	}, 3000);
// });
