function ConvertHandler() {
  this.getNum = function (input) {
    if (/^[A-Za-z]+$/.test(input)) {
      return 1;
    }
    // regex for matching whole numbers, decimal numbers and fractions
    let result = input.match(
      /^\d+(\.\d+|\/[1-9][0-9]*|\.\d+\/[1-9][0-9]*|\/\d+\.\d+|\.\d+\/\d+\.\d+)?\w+$/g
    );

    if (!result) {
      return "invalid input";
    }
    let [numerator, denomenator] = result[0].split("/");
    if (!denomenator) {
      return parseFloat(numerator);
    }
    let division = parseFloat(numerator) / parseFloat(denomenator);
    if (division !== Infinity) {
      return division;
    }
    return "invalid input";
  };

  this.getUnit = function (input) {
    let result;

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    switch (unit.toLowerCase()) {
      case "gal":
        return "gallons";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      case "mi":
        return "miles";
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
