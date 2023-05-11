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
