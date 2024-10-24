// return a string in alphabetical order

function alphabetSoup(str) {
	return str.split("").sort().join("");
}
console.log(alphabetSoup("hello"));
