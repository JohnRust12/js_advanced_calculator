'use strict';

function makeCalculator() {
  const calculator = {
    result: 0,

    add(res, number) {
      return res + number;
    },

    subtract(res, number) {
      return res - number;
    },

    multiply(res, number) {
      return res * number;
    },

    divide(res, number) {
      return res / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
