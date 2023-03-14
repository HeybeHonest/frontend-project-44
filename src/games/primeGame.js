import { randomNumber } from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  if (num < 2 || (num > 2 && num % 2 === 0)) return false;

  const maxDivisor = Math.floor(Math.sqrt(num)) + 1;

  for (let i = 3; i < maxDivisor; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

const generateData = () => {
  const question = randomNumber(0, 1000);
  const answer = getPrime(question) ? 'yes' : 'no';

  return [question.toString(), answer];
};

const startPrimeGame = () => {
  startGame(gameDescription, generateData);
};

export default startPrimeGame;
