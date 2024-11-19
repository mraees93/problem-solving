// check if input number is all even numbers
// input: 4602225
// output: false coz 5 isnt even

function simpleEvens(num) {
	for (let i = 0; i < String(num); i++) {
		if (String(num)[i] % 2 === 1) {
			return "false";
		}
	}
	return "true";
}
console.log(simpleEvens(4612226));
console.log(simpleEvens(4602226));
