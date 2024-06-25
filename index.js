const FIB_NUM = 8;
function fibs(num) {
	let arr = [0, 1];
	for (let i = 2; i < num; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	return arr;
}

function fibonacciRecursion(num) {
	if (num == 1) {
		return 0;
	}
	if (num == 2) {
		return 1;
	}
	return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}
console.log("fibonacci recursion: ");
console.log(fibonacciRecursion(FIB_NUM));
console.log("fibs");
console.log(fibs(FIB_NUM));

console.log("merge sort");
function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let halfLength = Math.ceil(arr.length / 2);
	let leftSide = arr.slice(0, halfLength);
	let rightSide = arr.slice(halfLength);

	return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(left, right) {
	const result = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	return [...result, ...left, ...right];
}

const arrayOfNumbers = [3, 2, 1, 13, 8, 5, 0, 1, 4, 9, 20];
console.log(mergeSort(arrayOfNumbers));
