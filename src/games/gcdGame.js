import startGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateData = () => {
  const a = randomNumber(1, 100);
  const b = randomNumber(1, 100);
  const question = `${a} ${b}`;
  const gcd = (num1, num2) => {
    let result = 0;
    let numOne = num1;
    let numTwo = num2;
    while (numOne !== 0 && numTwo !== 0) {
      if (numOne > numTwo) {
        numOne %= numTwo;
      } else {
        numTwo %= numOne;
      }
      result = numOne + numTwo;
    }
    return result;
  };
  const answer = gcd(a, b);
  return [question, answer.toString()];
};

const startGcdGame = () => {
  startGame(gameDescription, generateData);
};

export default startGcdGame;
