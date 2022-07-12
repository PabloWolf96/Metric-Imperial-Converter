const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  suite("convertHandler Function getNum", () => {
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
        "invalid number",
        'convertHandler.getNum("3/2/3lbs") should return "invalid number"'
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
  suite("convertHandler Function getUnit", () => {
    test("convertHandler should correctly read a unit of lbs", () => {
      assert.strictEqual(
        convertHandler.getUnit("100lbs"),
        "lbs",
        "convertHandler.getUnit() should return 'lbs'"
      );
    });

    test("convertHandler should correctly read a unit of lbs", () => {
      assert.strictEqual(
        convertHandler.getUnit("100lbs"),
        "lbs",
        "convertHandler.getUnit() should return 'lbs'"
      );
    });
    test("convertHandler should correctly read a unit of kg", () => {
      assert.strictEqual(
        convertHandler.getUnit("101.1kg"),
        "kg",
        "convertHandler.getUnit() should return 'kg'"
      );
    });
    test("convertHandler should correctly read a unit of gal", () => {
      assert.strictEqual(
        convertHandler.getUnit("1/2gal"),
        "gal",
        "convertHandler.getUnit() should return 'gal'"
      );
    });
    test("convertHandler should correctly read a unit of mi", () => {
      assert.strictEqual(
        convertHandler.getUnit("0.1/2mi"),
        "mi",
        "convertHandler.getUnit() should return 'mi'"
      );
    });
    test("convertHandler should correctly read a unit of km", () => {
      assert.strictEqual(
        convertHandler.getUnit("1.1/1.2km"),
        "km",
        "convertHandler.getUnit() should return 'km'"
      );
    });
    test("convertHandler should correctly read a unit of L", () => {
      assert.strictEqual(
        convertHandler.getUnit("1000L"),
        "L",
        "convertHandler.getUnit() should return 'L'"
      );
    });
    test("convertHandler should correctly return an error for an invalid input unit.", () => {
      assert.strictEqual(
        convertHandler.getUnit("123.5oz"),
        "invalid unit",
        "convertHandler.getUnit() should return 'invalid unit'"
      );
    });
  });
  suite("convertHandler getReturnUnit", () => {
    test("convertHandler should correctly get the return unit for lbs", () => {
      assert.strictEqual(
        convertHandler.getReturnUnit("lbs"),
        "kg",
        "convertHandler.getReturnUnit() should return 'kg'"
      );
    });

    test("convertHandler should correctly get the return unit for kg", () => {
      assert.strictEqual(
        convertHandler.getReturnUnit("kg"),
        "lbs",
        "convertHandler.getReturnUnit() should return 'lbs'"
      );
    });
    test("convertHandler should correctly get the return unit for gal", () => {
      assert.strictEqual(
        convertHandler.getReturnUnit("gal"),
        "l",
        "convertHandler.getReturnUnit() should return 'l'"
      );
    });
    test("convertHandler should correctly get the return unit for l=L", () => {
      assert.strictEqual(
        convertHandler.getReturnUnit("L"),
        "gal",
        "convertHandler.getReturnUnit() should return 'gal'"
      );
    });
    test("convertHandler should correctly get the return unit for mi", () => {
      assert.strictEqual(
        convertHandler.getReturnUnit("mi"),
        "km",
        "convertHandler.getReturnUnit() should return 'km'"
      );
    });
    test("convertHandler should correctly get the return unit for km", () => {
      assert.strictEqual(
        convertHandler.getReturnUnit("km"),
        "mi",
        "convertHandler.getReturnUnit() should return 'mi'"
      );
    });
  });
  suite("convertHandler spellOutUnit", () => {
    test("convertHandler should correctly spellout units in lbs", () => {
      assert.strictEqual(
        convertHandler.spellOutUnit("lbs"),
        "pounds",
        "convertHandler.spellOutUnit() should return 'pounds'"
      );
    });
    test("convertHandler should correctly spellout units in kg", () => {
      assert.strictEqual(
        convertHandler.spellOutUnit("kg"),
        "kilograms",
        "convertHandler.spellOutUnit() should return 'kilograms'"
      );
    });
    test("convertHandler should correctly spellout units in gal", () => {
      assert.strictEqual(
        convertHandler.spellOutUnit("gal"),
        "gallons",
        "convertHandler.spellOutUnit() should return 'gallons'"
      );
    });
    test("convertHandler should correctly spellout units in l", () => {
      assert.strictEqual(
        convertHandler.spellOutUnit("l"),
        "L",
        "convertHandler.spellOutUnit() should return 'L'"
      );
    });
    test("convertHandler should correctly spellout units in mi", () => {
      assert.strictEqual(
        convertHandler.spellOutUnit("mi"),
        "miles",
        "convertHandler.spellOutUnit() should return 'miles'"
      );
    });
    test("convertHandler should correctly spellout units in km", () => {
      assert.strictEqual(
        convertHandler.spellOutUnit("km"),
        "kilometers",
        "convertHandler.spellOutUnit() should return 'kilometers'"
      );
    });
  });
});
