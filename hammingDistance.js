// return the number of chars that are different in both strings
// input: ["coder", "codec"]  output:1
// input: ["10011", "10100"]  output:3
// input: ["helloworld", "worldhello"]  output: 8

function hammingDistance(arr) {
	let count = 0;
	for (let i = 0; i < arr[0].length; i++) {
		if (arr[0][i] !== arr[1][i]) {
			count++;
		}
	}
	return count;
}
console.log(hammingDistance(["coder", "codec"]));
console.log(hammingDistance(["10011", "10100"]));
console.log(hammingDistance(["helloworld", "worldhello"]));
