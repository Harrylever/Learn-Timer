// function createPerson(name) {
	// name = name;
	// age = age;
	// const talk = () => {
	// 	return `I am ${name}`
	// };
	// return {
	// 	name: name,
	// 	talk() {
	// 		return `I am ${this.name}`
	// 	} 
	// }
	// return {
	// 	name,
	// 	age,
	// 	talk,
	// }
// }

// const me = createPerson("Sina");
// const you = createPerson("Dean");

// console.log(me);
// console.log(you.talk());

// const myCoolProto = (name) => {
// 	name = name
// 	function talk() {
// 		return `Hello, I am ${this.name}`
// 	}
// }

// function createPerson(name) {
// 	return Object.create(myCoolProto(name), {
// 		name: {
// 			value: name,
// 		}
// 	});	
// };

// const me = createPerson('Sina');

// console.log(me);

// function Person(name) {
// 	this.name = name;
// }

class Persons {
	constructor(second, minutes, hours) {
		this.second = second;
		this.minutes = minutes;
		this.hours = hours;
	}
}


const first_timer = new Persons( 0, 0, 0);
const second_timer = new Persons(0, 0, 0);

console.log(`The First Timer is currently:\t 0${first_timer.hours}:0${first_timer.minutes}:0${first_timer.second}`);
console.log(`The Second Timer is currently:\t 0${second_timer.hours}:0${second_timer.minutes}:0${second_timer.second}`);
