// have the function ScaleBalancing(strArr) read strArr which will contain
// two elements, the first being the two positive integer weights on a balance
// scale (left and right sides) and the second element being a list of available
// weights as positive integers. Your goal is to determine if you can balance
// the scale by using the least amount of weights from the list, but using at
// most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"]
// then this means there is a balance scale with a weight of 5 on the left side
// and 9 on the right side. It is in fact possible to balance this scale by adding
// a 6 to the left side from the list of weights and adding a 2 to the right side.
// Both scales will now equal 11 and they are perfectly balanced. Your program should
// return a common separated string of the weights that were used from the list in
// ascending order, so for this example your program should return the string 2,6
// There will only ever be one unique solution and the list of available weights
// will not be empty. It is also possible to add two weights to only one side of
// the scale to balance it. If it is not possible to balance the scale then your
// program should return the string not possible.

function ScaleBalancing(strArr) {
  const unbalanced = strArr[0].match(/\d+/g).map(Number);
  const weights = strArr[1]
    .match(/\d+/g)
    .map(Number)
    .sort((a, b) => a - b);
  const addedWeights = [];
  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights.length; j++) {
      if (i === j) continue;
      if (unbalanced[0] + weights[j] === unbalanced[1]) return `${weights[j]}`;
      if (unbalanced[1] + weights[j] === unbalanced[0]) return `${weights[j]}`;
      if (
        unbalanced[1] + weights[i] + weights[j] === unbalanced[0] ||
        unbalanced[0] + weights[i] + weights[j] === unbalanced[1]
      ) {
        return `${weights[i]}, ${weights[j]}`;
      }
      addedWeights[j] = unbalanced[0] + weights[j];
      if (addedWeights.includes(unbalanced[1] + weights[j])) {
        const idx = addedWeights.indexOf(unbalanced[1] + weights[j]);
        return String(weights[j], weights[idx]);
      }
    }
  }
  return "Not possible";
}
// console.log(ScaleBalancing(["[5, 9]", "[1, 2, 6, 7]"])); //2,6
// console.log(ScaleBalancing(["[2, 9]", "[1, 2, 6, 8]"])); //1,6
// console.log(ScaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"])); //3,6
// console.log(ScaleBalancing(["[5, 3]", "[1, 2, 6, 7]"])); //2
// console.log(ScaleBalancing(["[7, 3]", "[1, 4, 6, 7]"])); //4
// console.log(ScaleBalancing(["[8, 0]", "[1, 4, 2, 4]"])); //4,4
// console.log(ScaleBalancing(["[2, 20]", "[16, 4, 2, 3]"])); //2,16
// console.log(ScaleBalancing(["[3, 7]", "[1, 2, 7]"])); //NP
// console.log(ScaleBalancing(["[4, 10]", "[5, 2, 0, 3]"])); //NP
// console.log(ScaleBalancing(["[12, 11]", "[7, 4, 0, 4]"])); //NP
// console.log(ScaleBalancing(["[6, 18]", "[2, 2, 0, 2]"])); //NP
// console.log(ScaleBalancing(["[2, 18]", "[2, 2, 0, 2]"])); //NP

// function ScaleBalancing(strArr) {
//   const obj1 = {};
//   const obj2 = {};
//   const arr1 = [];
//   const arr2 = [];
//   let unbalanced = strArr[0].match(/\d+/g).map(Number);
//   const weights = strArr[1].match(/\d+/g).map(Number);
//   for (let i = 0; i < unbalanced.length; i++) {
//     for (let j = 0; j < weights.length; j++) {
//       let total = unbalanced[i] + weights[j];
//       if (i === 0) {
//         obj1[total] = weights[j];
//         if (total === unbalanced[1]) return String(weights[j]);
//         for (let k = 0; k < weights.length; k++) {
//           if (total + weights[k] === unbalanced[1] && arr1.length < 2) {
//             arr1.push(weights[j]);
//           } else continue;
//         }
//       } else if (i === 1) {
//         obj2[total] = weights[j];
//         if (total === unbalanced[0]) return String(weights[j]);
//         for (let k = 0; k < weights.length; k++) {
//           if (total + weights[k] === unbalanced[0] && arr1.length < 2) {
//             arr1.push(weights[j]);
//           } else continue;
//         }
//       }
//     }
//   }
//   const dupkey = Object.keys(obj1).find((x) => obj2.hasOwnProperty(x));
//   const arr = [obj1[dupkey], obj2[dupkey]].filter((i) => i !== undefined);
//   return arr.length === 2
//     ? arr.sort((a, b) => a - b).join()
//     : arr1.length === 2
//     ? arr1.sort((a, b) => a - b).join()
//     : arr2.length === 2
//     ? arr2.sort((a, b) => a - b).join()
//     : "Not possible";
// }
// console.log(ScaleBalancing(["[5, 9]", "[1, 2, 6, 7]"])); //2,6
// console.log(ScaleBalancing(["[2, 9]", "[1, 2, 6, 8]"])); //1,8
// console.log(ScaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"])); //3,6
// console.log(ScaleBalancing(["[3, 5]", "[1, 2, 6, 7]"])); //2
// console.log(ScaleBalancing(["[7, 3]", "[1, 4, 6, 7]"])); //4
// console.log(ScaleBalancing(["[8, 0]", "[1, 4, 2, 4]"])); //4,4
// console.log(ScaleBalancing(["[2, 20]", "[16, 4, 2, 3]"])); //2,16
// console.log(ScaleBalancing(["[3, 7]", "[1, 2, 7]"])); //NP
// console.log(ScaleBalancing(["[4, 10]", "[5, 2, 0, 3]"])); //NP
// console.log(ScaleBalancing(["[12, 11]", "[7, 4, 0, 4]"])); //NP
// console.log(ScaleBalancing(["[6, 18]", "[2, 2, 0, 2]"])); //NP
// console.log(ScaleBalancing(["[2, 18]", "[2, 2, 0, 2]"])); //NP

// function ScaleBalancing(strArr) {
// 	let unbalanced = strArr[0].match(/\d+/g).map(Number);
// 	const weights = strArr[1].match(/\d+/g).map(Number);
// 	for (let i = 0; i < weights.length; i++) {
// 		if (
// 			unbalanced[0] + weights[i] === unbalanced[1] ||
// 			unbalanced[1] + weights[i] === unbalanced[0]
// 		) {
// 			if (unbalanced[0] > unbalanced[1]) {
// 				return weights[i];
// 			} else return weights[i];
// 		}
// 		for (let j = i + 1; j < weights.length; j++) {
// 			if (
// 				unbalanced[0] + weights[i] + weights[j] === unbalanced[1] ||
// 				unbalanced[1] + weights[i] + weights[j] === unbalanced[0] ||
// 				unbalanced[0] + weights[i] === unbalanced[1] + weights[j] ||
// 				unbalanced[1] + weights[i] === unbalanced[0] + weights[j]
// 			) {
// 				if (unbalanced[0] < unbalanced[1]) {
// 					return `${weights[i]}, ${weights[j]}`;
// 				} else return `${weights[j]}, ${weights[i]}`;
// 			}
// 		}
// 	}
// 	return "Not possible";
// }
console.log(ScaleBalancing(["[5, 9]", "[1, 2, 6, 7]"])); //2,6
console.log(ScaleBalancing(["[2, 9]", "[1, 2, 6, 8]"])); //1,8
console.log(ScaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"])); //3,6
console.log(ScaleBalancing(["[3, 5]", "[1, 2, 6, 7]"])); //2
console.log(ScaleBalancing(["[7, 3]", "[1, 4, 6, 7]"])); //4
console.log(ScaleBalancing(["[8, 0]", "[1, 4, 2, 4]"])); //4,4
console.log(ScaleBalancing(["[2, 20]", "[16, 4, 2, 3]"])); //2,16
console.log(ScaleBalancing(["[3, 7]", "[1, 2, 7]"])); //NP
console.log(ScaleBalancing(["[4, 10]", "[5, 2, 0, 3]"])); //NP
console.log(ScaleBalancing(["[12, 11]", "[7, 4, 0, 4]"])); //NP
console.log(ScaleBalancing(["[6, 18]", "[2, 2, 0, 2]"])); //NP
console.log(ScaleBalancing(["[2, 18]", "[2, 2, 0, 2]"])); //NP

function ScaleBalancing(strArr) {
  const scale = strArr[0].match(/\d+/g).map(Number);
  const weights = strArr[1].match(/\d+/g).map(Number);
  let i = 0;
  while (i < weights.length) {
    let j = i + 1;
    while (j < weights.length) {
      let sortedWeights = [weights[i], weights[j]].sort((a, b) => a - b).join();
      if (
        scale[0] + weights[i] === scale[1] ||
        scale[1] + weights[i] === scale[0]
      ) {
        return String(weights[i]);
      }
      if (
        scale[0] + weights[i] + weights[j] === scale[1] ||
        scale[1] + weights[i] + weights[j] === scale[0]
      ) {
        return sortedWeights;
      }
      if (
        scale[0] + weights[i] === scale[1] + weights[j] ||
        scale[1] + weights[i] === scale[0] + weights[j]
      ) {
        return sortedWeights;
      }
      j++;
    }
    i++;
  }
  return "Not possible";
}
// console.log(ScaleBalancing(["[5, 9]", "[1, 2, 6, 7]"])); //2,6
// console.log(ScaleBalancing(["[2, 9]", "[1, 2, 6, 8]"])); //1,6
// console.log(ScaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"])); //3,6
// console.log(ScaleBalancing(["[3, 5]", "[1, 2, 6, 7]"])); //2
// console.log(ScaleBalancing(["[7, 3]", "[1, 4, 6, 7]"])); //4
// console.log(ScaleBalancing(["[8, 0]", "[1, 4, 2, 4]"])); //4,4
// console.log(ScaleBalancing(["[2, 20]", "[16, 4, 2, 3]"])); //2,16
// console.log(ScaleBalancing(["[3, 7]", "[1, 2, 7]"])); //NP
// console.log(ScaleBalancing(["[4, 10]", "[5, 2, 0, 3]"])); //NP
// console.log(ScaleBalancing(["[12, 11]", "[7, 4, 0, 4]"])); //NP
// console.log(ScaleBalancing(["[6, 18]", "[2, 2, 0, 2]"])); //NP
// console.log(ScaleBalancing(["[2, 18]", "[2, 2, 0, 2]"])); //NP
