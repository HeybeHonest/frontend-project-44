#!/usr/bin/env node
import startGame from '../index.js';
import randomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const generateDataEven = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question.toString(), answer];
};

const startEvenGame = () => {
  startGame(gameDescription, generateDataEven);
};

export default startEvenGame;
