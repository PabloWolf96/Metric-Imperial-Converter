const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  suite("convertHandler Function getNum", function () {
    test("convertHandler should correctly read a whole number input.", () => {
      assert.strictEqual(
        convertHandler.getNum("100lbs"),
        100,
        'convertHandler.getNum("100lbs") should return 100'
      );
    });
    test("convertHandler should correctly read a decimal number input", () => {
      assert.strictEqual(
        convertHandler.getNum("123.5lbs"),
        123.5,
        'convertHandler.getNum("123.5lbs") should return 123.5'
      );
    });
    test("convertHandler should correctly read a fractional input.", () => {
      assert.strictEqual(
        convertHandler.getNum("1/2lbs"),
        0.5,
        'convertHandler.getNum("1/2lbs") should return 0.5'
      );
    });
    test("convertHandler should correctly read a fractional input with a decimal.", () => {
      assert.strictEqual(
        convertHandler.getNum("1/2.5lbs"),
        0.4,
        'convertHandler.getNum("1/2.5lbs") should return 0.4'
      );
    });
    test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", () => {
      assert.strictEqual(
        convertHandler.getNum("3/2/3lbs"),
        "invalid input",
        'convertHandler.getNum("3/2/3lbs") should return "invalid input"'
      );
    });
    test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", () => {
      assert.strictEqual(
        convertHandler.getNum("lbs"),
        1,
        "convertHandler.getNum() should return 1"
      );
    });
  });
});
