// input: "BOB loves-coding"
// output: "bobLovesCoding"

function camelCase(str) {
	let arr = str.split(/[^A-Za-z]/g);
	const f = arr.shift().toLowerCase();
	return f + arr.map((i) => i[0].toUpperCase() + i.substring(1)).join("");
}
console.log(camelCase("BOB loves-coding"));
console.log(camelCase("BOB#loves)coding"));
console.log(camelCase("BOB:loves?coding"));
