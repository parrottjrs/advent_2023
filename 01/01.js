const fs = require("fs");

const getValues = (file) => {
  return fs.readFileSync(file).toString("UTF8").split("\n");
};

const values = getValues("01/puzzleInput.txt");

let numbers = [];

const calibration = () => {
  for (i = 0; i < values.length; i++) {
    string = values[i];
    nums = string.replace(/[^0-9]/g, "");

    numbers.push(Number(nums[0].concat(nums.slice(-1))));
  }
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  console.log(`The sum of all calibration numbers is ${sum}`);
};

calibration();
