#!/usr/bin/env node
import startGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['*', '+', '-'];
const generateData = () => {
  const a = randomNumber(0, 100);
  const b = randomNumber(0, 100);
  const operator = operators[randomNumber(0, operators.length - 1)];
  const question = `${a} ${operator} ${b}`;
  let result = 0;
  switch (operator) {
    case '*':
      result = a * b;
      break;
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      return false;
  }
  const answer = result.toString();
  return [question, answer];
};

const startCalcGame = () => {
  startGame(gameDescription, generateData);
};

export default startCalcGame;
