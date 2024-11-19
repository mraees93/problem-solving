// return str with words seperated by dashes
// input: "BOB loves-coding"
// output: "bob_loves_coding"

function snakeCase(str) {
	return str
		.split(/[^A-Za-z]/g)
		.map((i) => i.toLowerCase())
		.join("_");
}
console.log(snakeCase("BOB loves-coding"));
