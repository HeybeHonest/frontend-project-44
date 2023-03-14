import startGame from '../index.js';
import { randomNumber, calculate } from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['*', '+', '-'];
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
