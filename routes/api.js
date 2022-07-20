"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res) => {
    const input = req.query.input;
    const number = convertHandler.getNum(input);
    const unit = convertHandler.getUnit(input);
    let message = "";
    if (number === "invalid number") {
      message = "invalid number";
    }
    if (unit === "invalid unit") {
      message =
        message === "invalid number" ? message + " and unit" : "invalid unit";
    }
    if (message.startsWith("invalid")) {
      return res.send(message);
    }
    const convertedResult = convertHandler.convert(number, unit);
    const returnNum = convertHandler.getNum(convertedResult);
    const returnUnit = convertHandler.getUnit(convertedResult);
    message = convertHandler.getString(number, unit, returnNum, returnUnit);
    res.json({
      initNum: number,
      initUnit: unit,
      returnNum,
      returnUnit,
      string: message,
    });
  });
};
