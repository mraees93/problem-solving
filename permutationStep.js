// function permutationStep(num) {
// 	let nums = num.toString().split("").map(Number);
// 	//let nums2 = num.toString().split("").map(Number);
// 	// for (let i = 0; i < nums.length; i++) {

// 	// }
// 	return
// }
// console.log(permutationStep(123)); //132
//console.log(permutationStep(12 453)); //12534

// get all combinations of input except the input. then return lowest number

function permutationStep(num) {
	let nums = num.toString().split("");
	const permute = (nums, permutations = []) =>
		nums.length === 0
			? [permutations]
			: nums.flatMap((v, i, nums) =>
					permute(
						nums.filter((_, j) => j !== i),
						[...permutations, v]
					)
			  );
	const res = permute(nums)
		.map((arr) => Number(arr.join("")))
		.sort((a, b) => a - b);
	if (res.every((v) => v === res[0])) return -1;
	else
		for (let i = 0; i < res.length; i++) {
			if (res[i] === num) {
				return res[i + 1];
			}
		}
}
console.log(permutationStep(123));
console.log(permutationStep(12453)); //12534
