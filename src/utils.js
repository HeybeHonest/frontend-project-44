export const randomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const calculate = (a, b, operator) => {
  let result = 0;
  if (operator === '*') {
    result = a * b;
  }
  if (operator === '+') {
    result = a + b;
  }
  if (operator === '-') {
    result = a - b;
  }
  return result;
};
