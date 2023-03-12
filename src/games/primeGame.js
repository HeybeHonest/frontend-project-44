#!/usr/bin/env node
import randomNumber from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const primeGame = () => {
  const question = randomNumber(0, 1000);
  const answer = getPrime(question) ? 'yes' : 'no';

  return [question.toString(), answer];
};

const startPrimeGame = () => {
  startGame(gameDescription, primeGame);
};

export default startPrimeGame;
