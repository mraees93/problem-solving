// from the position where a 1 is in array, return the number of spaces
// either left or right you must move to reach an enemy which is represented
// by a 2. The array will contain any number 0's and 2's but only a single 1.
// it may not contain any 2's as well, in that case return a 0
// input: [0,0,1,0,0,2,0,2]
//output: 3 coz closest enemy(2) is is 3 spaces away from 1

function closestEnemy(arr) {
	const idx1 = arr.indexOf(1);
	const idx2 = arr.indexOf(2);
	const moreTwos = arr.filter((v) => v === 2).length;
	return !arr.includes(2)
		? 0
		: moreTwos > 1 && idx1 > idx2
		? idx1 - arr.lastIndexOf(2)
		: idx1 > idx2
		? idx1 - idx2
		: idx2 - idx1;
}
console.log(closestEnemy([2, 2, 0, 0, 0, 0, 1]));
console.log(closestEnemy([2, 0, 0, 0, 0, 0, 1]));
console.log(closestEnemy([1, 0, 0, 2, 0, 0, 1]));
console.log(closestEnemy([0, 0, 1, 0, 0, 2, 0, 2]));
