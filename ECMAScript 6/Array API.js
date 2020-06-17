// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("`Array.from` converts an array-like object or list into an Array", () => {
	const arrayLike = { 0: "one", 1: "two", length: 2 };
	it("call `Array.from` with an array-like object", function () {
		const arr = Array.from(arrayLike);
		assert.deepEqual(arr, ["one", "two"]);
	});
	it("a DOM node`s classList object can be converted", function () {
		const domNode = document.createElement("span");
		domNode.classList.add("some");
		domNode.classList.add("other");
		const classList = Array.from(domNode.classList);
		assert.equal("" + classList, "" + ["some", "other"]);
	});
	it("convert a NodeList to an Array and `filter()` works on it", function () {
		const nodeList = document.createElement("span");
		const divs = Array.from(nodeList).filter((node) => node.tagName === "div");
		assert.deepEqual(divs.length, 0);
	});
	describe("custom conversion using a map function as second param", () => {
		it("we can modify the value before putting it in the array", function () {
			const arr = Array.from(arrayLike, (value) => value.toUpperCase());
			assert.deepEqual(arr, ["ONE", "TWO"]);
		});
		it("and we also get the object`s key as second parameter", function () {
			const arr = Array.from(arrayLike, (value) => `${Array.from(arrayLike).indexOf(value)}=${value}`);
			assert.deepEqual(arr, ["0=one", "1=two"]);
		});
	});
});

// 30: array - `Array.of` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("`Array.of` creates an array with the given arguments as elements", () => {
	it("dont mix it up with `Array(10)`, where the argument is the array length", () => {
		const arr = Array.of(10);
		assert.deepEqual(arr, [10]);
	});
	it("puts all arguments into array elements", () => {
		const arr = Array.of(1, 2);
		assert.deepEqual(arr, [1, 2]);
	});
	it("takes any kind and number of arguments", () => {
		const starter = [1, 2];
		const end = [3, "4"];
		const arr = Array.of(starter, ...end);
		assert.deepEqual(arr, [[1, 2], 3, "4"]);
	});
});

// 31: array - `Array.prototype.fill` method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("`Array.prototype.fill` can fill up an array with one value", () => {
	it("`fill(0)` will populate `0` into each array element", function () {
		const arr = new Array(3).fill();
		assert.deepEqual(arr, [0, 0, 0]);
	});
	it("fill only changes content, adds no new elements", function () {
		const arr = [undefined].fill(0);
		assert.deepEqual(arr, []);
	});
	it("second parameter to `fill()` is the position where to start filling", function () {
		const fillPosition = 0;
		const arr = [1, 2, 3].fill(42, fillPosition);
		assert.deepEqual(arr, [1, 2, 42]);
	});
	it("third parameter is the position where filling stops", function () {
		const fillStartAt = 1;
		const fillEndAt = 1;
		const arr = [1, 2, 3].fill(42, fillStartAt, fillEndAt);
		assert.deepEqual(arr, [1, 42, 3]);
	});
});
