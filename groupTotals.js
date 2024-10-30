// input: ["B:-1", "A:1", "B:3", "A:5"]
// output: "A:6, B:2"

function groupTotals(strArr) {
	let obj = {};
	const nums = strArr.map((n) => Number(n.match(/-?\d+/g).join()));
	for (let i = 0; i < strArr.length; i++) {
		if (!obj[strArr[i][0]]) obj[strArr[i][0]] = nums[i];
		else obj[strArr[i][0]] += nums[i];
	}
	return Object.keys(obj)
		.filter((k) => obj[k] !== 0)
		.sort((a, b) => a.localeCompare(b))
		.map((k) => `${k}:${obj[k]}`)
		.join(", ");
}
console.log(groupTotals(["B:-1", "A:1", "B:3", "A:5"]));
console.log(groupTotals(["B:-1", "A:1", "B:1", "A:5"]));
console.log(groupTotals(["B:7", "A:1", "B:1", "A:5", "C:3", "C:2"]));
