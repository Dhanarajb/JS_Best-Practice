// Function

function Fruits(orange, banana) {
  const buy_Frutes = `I need ${orange} oranges and ${banana} bananas`;
  return buy_Frutes;
}
const for_orange = Fruits(2, 0);
console.log(for_orange);

const for_both = Fruits(3, 5);
console.log(for_both);

// Function Declaration vs Expression

// Declaration

function findAge(input) {
  return 2037 - input;
}
const age = findAge(1997);
console.log(age);

// Expression

const age1 = function (ag) {
  return 2037 - ag;
};
const age11 = age1(1996);
console.log(age11);

// Arrow Function

const findName = (inName) => inName;
console.log(findName('Dhanaraj'));

const findAgee = (agee) => 2037 - agee;
console.log(findAgee(1997));

// -----------------------------------------------------------------------

function Avg_Cal(in1) {
  return in1 * 4;
}

function fruits(banana, orange) {
  const Cal_banana = Avg_Cal(banana);
  const Cal_orange = Avg_Cal(orange);
  const Cal_both = Cal_banana + Cal_orange;
  return Cal_both;
}

const result = fruits(4, 0);
console.log(result);
// ---------------------------------------------------------------------------

const CalcAverage = (a, b, c) => (a + b + c) / 3;

const AvgDolphin = CalcAverage(23, 23, 45);
const AvgKoalas = CalcAverage(43, 23, 23);

function CheckWinners(AvgDolphin, AvgKoalas) {
  if (AvgDolphin > AvgKoalas) {
    console.log('Dolphin Win');
  } else if (AvgDolphin < AvgKoalas) {
    console.log('Koalas Win');
  } else if (AvgDolphin === AvgKoalas) {
    console.log('Together Win');
  } else {
    console.log('InValid');
  }
}

const res = CheckWinners(AvgDolphin, AvgKoalas);
console.log(res);
// const CalcAverage = (23+34+45)/3
