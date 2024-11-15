// return the string true if input integer is a power of 2
// input: 4
// output: "true"
// input: 124
// output: "false"

function powersOfTwo(num) {
	if (num === 1) {
		return "true";
	}
	if (num % 2 !== 0) {
		return "false";
	}
	return powersOfTwo(num / 2);
}
console.log(powersOfTwo(124));

function powersOfTwo(num) {
	if (num === 1) {
		return "true";
	}
	return num && (num & (num - 1)) === 0;
}
console.log(powersOfTwo(4));
