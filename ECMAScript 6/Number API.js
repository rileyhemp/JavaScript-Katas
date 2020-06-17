// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("`Number.isInteger()` determines if a value is an integer", function () {
	it("`isInteger` is a static function on `Number`", function () {
		const whatType = "function";
		assert.equal(whatType, typeof Number.isInteger);
	});
	describe("zero in different ways", function () {
		it("0 is an integer", function () {
			const zero = 0;
			assert(Number.isInteger(zero));
		});
		it("0.000", function () {
			const veryZero = 0.0;
			assert(Number.isInteger(veryZero));
		});
		it('the string "0" is NOT an integer', function () {
			const stringZero = "0";
			assert(Number.isInteger(stringZero) === false);
		});
	});
	describe("one in different ways", function () {
		it("0.111 + 0.889", function () {
			const rest = 0.889;
			assert(Number.isInteger(0.111 + rest));
		});
		it("0.5 + 0.2 + 0.2 + 0.1 = 1 ... isn`t it?", function () {
			const oneOrNot = 0.6 + 0.2 + 0.3;
			assert(Number.isInteger(oneOrNot) === false);
		});
		it('parseInt`ed "1" is an integer', function () {
			const convertedToInt = Number.parseInt("1");
			assert(Number.isInteger(convertedToInt));
		});
	});
	describe("what is not an integer", function () {
		it("`Number()` is an integer", function () {
			const numberOne = Number();
			assert(Number.isInteger(numberOne));
		});
		it("`{}` is NOT an integer", function () {
			const isit = Number.isInteger({});
			assert(isit === false);
		});
		it("`0.1` is not an integer", function () {
			const isit = Number.isInteger(0.1);
			assert(isit === false);
		});
		it("`Number.Infinity` is not an integer", function () {
			const isit = Number.isInteger(Number.Infinity);
			assert(isit === false);
		});
		it("`NaN` is not an integer", function () {
			const isit = Number.isInteger(NaN);
			assert(isit === false);
		});
	});
});

// 80: Number - isNaN
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("`Number.isNaN()` determines if a value is `NaN`", function () {
	it("it is a static function on `Number`", function () {
		const whatType = "function";
		assert.equal(whatType, typeof Number.isNaN);
	});
	describe("returns false", () => {
		describe("for any not-Number type", () => {
			it("like null", () => {
				const justNull = null;
				assert.equal(Number.isNaN(justNull), false);
			});
			it("like a string", () => {
				const aString = "NaN";
				assert.equal(Number.isNaN(aString), false);
			});
			it("like an object", () => {
				const anObject = { NaN };
				assert.equal(Number.isNaN(anObject), false);
			});
			describe("different to the global `isNaN` function (specified way before ES6)", () => {
				it("an object gets converted to a Number before the check, and returns true therefore", () => {
					const fn = function (input) {
						return isNaN(input);
					};
					assert.equal(fn({}), true);
				});
				it("a string gets converted to a Number first, and returns true therefore (even though its not `NaN`)", () => {
					const fn = function (input) {
						return isNaN(input);
					};
					assert.equal(fn("just a string"), true);
				});
			});
		});
		describe("for Numbers", () => {
			it("like 0", () => {
				const zero = 0;
				assert.equal(Number.isNaN(zero), false);
			});
			it("or Infinity (+∞)", () => {
				const infinity = Number.Infinity;
				assert.equal(Number.isNaN(infinity), false);
			});
			it("or the biggest Number (9007199254740991 (2^53−1))", () => {
				const max = Number.MAX_SAFE_INTEGER;
				assert.equal(Number.isNaN(max), false);
			});
			it("or a decimal number", () => {
				const pi = 3.1415926535897932;
				assert.equal(Number.isNaN(pi), false);
			});
		});
	});
	describe("returns true for", () => {
		it("exactly `NaN`", () => {
			const notANumber = NaN;
			assert.equal(Number.isNaN(notANumber), true);
		});
		it("zero divided by zero", () => {
			const zeroDividedByZero = 0 / 0;
			assert.equal(Number.isNaN(zeroDividedByZero), true);
		});
	});
});

// ES6 - 81: Number - parseInt
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe("`Number.parseInt()` parses a string and returns an integer.", () => {
	it("it is a static function on `Number`", () => {
		const whatType = "function";
		assert.equal(whatType, typeof Number.parseInt);
	});
	it("is the same as the global function `parseInt`", () => {
		const parseIntFunction = Number.parseInt;
		assert.equal(parseIntFunction, global().parseInt);
	});
	it("`parseInt` was specified in ECMAScript v1 (please find that ES1 kata for learning more)", () => {
		const version = 1;
		assert.equal("ECMAScript v" + version, "ECMAScript v1");
	});
});

const global = () => globalThis || window || global;
