import startGame from '../index.js';
import { randomNumber, gcd } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateData = () => {
  const a = randomNumber(1, 100);
  const b = randomNumber(1, 100);
  const question = `${a} ${b}`;
  const answer = gcd(a, b);
  return [question, answer.toString()];
};

const startGcdGame = () => {
  startGame(gameDescription, generateData);
};

export default startGcdGame;
