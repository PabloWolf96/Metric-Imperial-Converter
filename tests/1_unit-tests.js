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
    test("convertHandler should correctly read a unit", () => {
      let input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG",
      ];
      let output = [
        "gal",
        "L",
        "mi",
        "km",
        "lbs",
        "kg",
        "gal",
        "L",
        "mi",
        "km",
        "lbs",
        "kg",
      ];
      input.forEach(function (ele, index) {
        assert.equal(convertHandler.getUnit(ele), output[index]);
      });
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
    test("convertHandler should correctly get the return unit", () => {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
    });
  });
  suite("convertHandler spellOutUnit", () => {
    test("convertHandler should correctly spellout units", () => {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      let expect = [
        "gallons",
        "liters",
        "miles",
        "kilometers",
        "pounds",
        "kilograms",
      ];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
    });
  });
  suite("convertHandler convert", () => {
    test("convertHandler should correctly convert gal to L.", () => {
      assert.strictEqual(
        convertHandler.convert(10, "gal"),
        "37.85410L",
        "convertHandler.convert() should return 37.85410L"
      );
    });
    test("convertHandler should correctly convert L to gal.", () => {
      assert.strictEqual(
        convertHandler.convert(10, "L"),
        "2.64172gal",
        "convertHandler.convert() should return 2.64172gal"
      );
    });
    test("convertHandler should correctly convert mi to km.", () => {
      assert.strictEqual(
        convertHandler.convert(100, "mi"),
        "160.93400km",
        "convertHandler.convert() should return 160.93400km"
      );
    });
    test("convertHandler should correctly convert km to mi.", () => {
      assert.strictEqual(
        convertHandler.convert(100, "km"),
        "62.13727mi",
        "convertHandler.convert() should return 62.13727mi"
      );
    });
    test("convertHandler should correctly convert kg to lbs.", () => {
      assert.strictEqual(
        convertHandler.convert(10, "kg"),
        "22.04624lbs",
        "convertHandler.convert() should return 22.04624lbs"
      );
    });
    test("convertHandler should correctly convert lbs to kg.", () => {
      assert.strictEqual(
        convertHandler.convert(10, "lbs"),
        "4.53592kg",
        "convertHandler.convert() should return 4.53592kg"
      );
    });
  });
});
