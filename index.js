console.log("fibonacci");

function fibonacci(num) {
	if (num == 1) {
		return 0;
	}
	if (num == 2) {
		return 1;
	}
	return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(8));

console.log("merge sort");
function mergeSort(arr) {
	if (arr.length > 1) {
		let halfLength = Math.ceil(arr.length / 2);
		let leftSide = arr.slice(0, halfLength);
		let rightSide = arr.slice(halfLength);
		if (mergeSort(leftSide[0]) > mergeSort(rightSide[0])) {
			let retArr = [rightSide[0], leftSide[0]];
		}
	}
	return arr;
}
