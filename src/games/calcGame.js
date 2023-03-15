import startGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['*', '+', '-'];
const calculate = (num1, num2, mathSign) => {
  let sum = 0;
  switch (mathSign) {
    case '*':
      sum = num1 * num2;
      break;
    case '+':
      sum = num1 + num2;
      break;
    default:
      sum = num1 - num2;
  }
  return sum;
};
const generateData = () => {
  const a = randomNumber(0, 100);
  const b = randomNumber(0, 100);
  const operator = operators[randomNumber(0, operators.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const result = calculate(a, b, operator);

  const answer = result.toString();
  return [question, answer];
};

const startCalcGame = () => {
  startGame(gameDescription, generateData);
};

export default startCalcGame;
