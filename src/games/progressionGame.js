import { randomNumber } from '../utils.js';
import startGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const arrLength = 10;

const getProgression = (firstElement, step, length) => {
  const arr = [firstElement];
  for (let i = 1; i < length; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  return arr;
};

const generateData = () => {
  const firstElement = randomNumber(0, 100);
  const progressionStep = randomNumber(1, 10);
  const hiddenElement = randomNumber(0, arrLength - 1);
  const progression = getProgression(firstElement, progressionStep, arrLength);

  const answer = progression[hiddenElement].toString();
  progression[hiddenElement] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const startProgressionGame = () => {
  startGame(gameDescription, generateData);
};

export default startProgressionGame;
