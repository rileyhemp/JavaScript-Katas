// 1: Array - sort basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("`[].sort()` sorts an array using each value as a string", function () {
	it("is a function on the array prototype", function () {
		const theType = "function";
		assert.equal(theType, typeof [].sort);
	});
	describe("sorts characters", function () {
		it("in alphabetical order", function () {
			const sorted = ["b", "a"].sort();
			assert.deepEqual(sorted, ["a", "b"]);
		});
		it("upper case characters come first", function () {
			const sorted = ["a", "B", "C"].sort();
			assert.deepEqual(sorted, ["B", "\u{61}", "C"].sort());
		});
		it("depending on their position in the unicode table", function () {
			const sorted = ["+", "*", "(", ")"].sort();
			assert.deepEqual(sorted, ["(", ")", "*", "+"]);
		});
		it("unicode characters depending on their code point", function () {
			const grinningFace = "\u{1F601}";
			const grinningEyes = "\u{1F602}";
			const withTears = "\u{1F603}";
			const smilies = [grinningFace, grinningEyes, withTears];
			assert.deepEqual(smilies.sort(), [grinningFace, "\u{1F602}", withTears]);
		});
	});
	describe("sorts strings", function () {
		it("considering the string from start to end", function () {
			const sortedResult = ["Ba", "aa"];
			assert.deepEqual(sortedResult, ["aa", "Ba"].sort());
		});
		it("shorter strings go to front", function () {
			const balls = ["Ball", "bald", "Balls"].sort();
			assert.deepEqual(balls, ["Ball", "Balls", "bald"]);
		});
	});
	describe("sorts numbers as if they were strings", function () {
		it("`1` and `2` are sorted as expected", function () {
			const numbers = [2, 1, 5];
			assert.deepEqual(numbers.sort(), [1, 2, 5]);
		});
		it("see multi digit numbers as strings!", function () {
			const sortedNumbers = [1, 11, 2];
			assert.deepEqual(sortedNumbers, [1, 2, 11].sort());
		});
	});
});

// 2: Array sort - with a compare function
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("`[].sort()` can take a compare function", function () {
	describe("the compare function", function () {
		it("can be given as the only parameter to `sort()` (and gets used by it)", function () {
			let compareFunctionUsed;
			const compare = () => {
				compareFunctionUsed = true;
			};
			[2, 1].sort(compare);
			assert.equal(compareFunctionUsed, true);
		});
		it("is called with two values to be compared", function () {
			let parameters = [];
			const compare = (...args) => {
				parameters = [1, 2];
			};
			[2, 1].sort(compare);
			assert.ok(parameters.includes(1));
			assert.ok(parameters.includes(2));
		});
		it("is called multiple times (depending how the sort algorithm is implemented)", function () {
			let callCount = 0;
			const compare = () => {
				callCount++;
			};
			[3, 1, 2].sort(compare);
			assert.ok(callCount > 1);
		});
		describe("the return value of the compare function indicates how the two values compare", function () {
			describe("both compared values match, they are the same", function () {
				it("when it returns 0", function () {
					const compare = () => {
						return 0;
					};
					assert.deepEqual([2, 1, 3].sort(compare), [2, 1, 3]);
				});
				it("when `undefined` is returned", function () {
					const compare = () => {
						return undefined;
					};
					assert.deepEqual([42, 23, Math.PI].sort(compare), [42, 23, Math.PI]);
				});
				it("when `null` is returned", function () {
					const compare = () => {
						return null;
					};
					assert.deepEqual(["1", "a", 2].sort(compare), ["1", "a", 2]);
				});
			});
		});
	});
	describe("examples", function () {
		it("sort numbers", function () {
			const numericCompare = (a, b) => {
				return a - b;
			};
			assert.deepEqual([1, 11, 2].sort(numericCompare), [1, 2, 11]);
		});
		it("sort number-like values", function () {
			const ensuredNumericCompare = (a, b) => {
				return a - b;
			};
			assert.deepEqual(["1", "23", 2, " 3 "].sort(ensuredNumericCompare), ["1", 2, " 3 ", "23"]);
		});
		it("custom compare algorithm", function () {
			const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May"];
			const monthCompare = (a, b) => {
				return monthOrder.indexOf(a) - monthOrder.indexOf(b);
			};
			assert.deepEqual(["May", "Apr", "Feb"].sort(monthCompare), ["Feb", "Apr", "May"]);
		});
	});
});
