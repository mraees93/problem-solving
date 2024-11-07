//search for all numbers in string and add up
// input: "75Number9"
// output: 84
// input: "10 2One Number*1*"
// output: 13

//my own solution
function numberAddition(str) {
	return str
		.split(/[^0-9]/g)
		.map((i) => Number(i))
		.reduce((t, i) => t + i);
}
console.log(numberAddition("75Number9"));
console.log(numberAddition("10 2One Number*1*"));
console.log(numberAddition("0 2One Number*123*"));
console.log(numberAddition("64He2ll60W21orL43d"));

// longer solution
function numberAddition(str) {
	let arr = str.split(/[^0-9]/g);
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += Number(arr[i]);
	}
	return total;
}
console.log(numberAddition("75Number9"));
console.log(numberAddition("10 2One Number*1*"));
console.log(numberAddition("0 2One Number*123*"));
console.log(numberAddition("64He2ll60W21orL43d"));
