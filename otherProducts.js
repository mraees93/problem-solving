// return other products in array
// input: [1,2,3,4,5] => [120,60,40,30,24] =>
//[(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]
//output: '120-60-40-30-24'
// input: [1,4,3]
// output: '12-3-4'
// input: [3,1,2,6]
// output: '12-36-18-6'

function otherProducts(arr) {
  const a = [];
  for (let i = 0; i < arr.length; i++) {
    let total = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        total *= arr[j];
        a[i] = total;
      }
    }
  }
  return a;
}
console.log(otherProducts([1, 2, 3, 4, 5]));
console.log(otherProducts([1, 4, 3]));
console.log(otherProducts([3, 1, 2, 6]));

// function otherProducts(arr) {
//   return arr.map((_, i) =>
//     arr.filter((_, idx) => i !== idx).reduce((t, v) => t * v, 1)
//   );
// }
// console.log(otherProducts([1, 2, 3, 4, 5]));
// console.log(otherProducts([1, 4, 3]));
// console.log(otherProducts([3, 1, 2, 6]));

// function otherProducts(arr) {
// 	let productsArr = [];
// 	arr.forEach((val, ind, theArray) => {
// 		newArray = Array.from(theArray);
// 		newArray.splice(ind, 1);
// 		productsArr[ind] = newArray.reduce((val1, val2) => val1 * val2);
// 	});
// 	return productsArr.join("-");
// }
// console.log(otherProducts([1, 2, 3, 4, 5]));
// console.log(otherProducts([1, 4, 3]));
// console.log(otherProducts([3, 1, 2, 6]));
