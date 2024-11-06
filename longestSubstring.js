// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// function lengthOfLongestSubstring(s) {
// 	let se = new Set();
// 	for (let i = 0; i < s.length; i++) {
// 		for (let j = i; j < s.length; j++) {
// 			se.add(s[i]);
// 		}
// 	}
// 	return se;
// }
// console.log(lengthOfLongestSubstring("pwwkew"));

function lengthOfLongestSubstring(str) {
	let left = 0;
	let right = 0;
	let set = new Set();
	let maxSubstringLength = 0;

	while (right < str.length) {
		if (!set.has(str.charAt(right))) {
			set.add(str.charAt(right));
			maxSubstringLength = Math.max(maxSubstringLength, set.size);
			right++;
		} else {
			set.delete(str.charAt(left));
			left++;
		}
	}
	return set.size;
}
console.log(lengthOfLongestSubstring("pwwkew"));

// function lengthOfLongestSubstring(s) {
// 	let strMap = new Map();
// 	let lengths = new Set();

// 	for (let i = 0; i < s.length; i++) {
// 		if (strMap.has(s[i])) {
// 			lengths.add(strMap.size);
// 			//strMap.shift();
// 		}
// 		strMap.set(s[i], i);
// 	}
// 	//return Math.max(...lengths, strMap.size);
// 	return strMap;
// }
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("pwwkew"));

// function lengthOfLongestSubstring(s) {
// 	let obj = new Object();

// 	for (let i = 0; i < s.length; i++) {
// 		key = s[i];
// 		Object.assign(obj, { [key]: i });
// 		indexes = Object.values(obj).sort((a, b) => a - b);
// 		const [long, st] = indexes.reduce(
// 			([long, st], c) =>
// 				c === st[st.length - 1] + 1
// 					? [long, [...st, c]]
// 					: [st.length > long.length ? st : long, [c]],
// 			[[], []]
// 		);
// 		longest = long.length > st.length ? long : st;
// 		a = Object.keys(obj).find((key) => obj[key] === longest[i]);
// 		console.log(a);
// 	}
// 	return Math.max(...length, strMap.size);
// 	//return a;
// }
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("pwwkew"));
