#!/usr/bin/env node
import startGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  let a = randomNumber(1, 100);
  let b = randomNumber(1, 100);
  const question = `${a} ${b}`;
  let answer = 0;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  answer = a + b;
  return [question, answer.toString()];
};

const startGcdGame = () => {
  startGame(gameDescription, gcdGame);
};

export default startGcdGame;
