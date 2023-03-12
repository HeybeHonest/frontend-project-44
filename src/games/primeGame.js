#!/usr/bin/env node
import randomNumber from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
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
