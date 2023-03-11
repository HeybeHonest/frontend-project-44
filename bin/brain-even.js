#!/usr/bin/env node
/* eslint-disable no-plusplus */
// import readlineSync from 'readline-sync';
import { greetingsAndName, getAnswer } from '../src/cli.js';
import { randomNumber, isEven } from '../src/index.js';

const userName = greetingsAndName();
const question = 'Answer "yes" if the number is even, otherwise answer "no"';
console.log(question);
let i = 0;
while (i < 4) {
  const q = randomNumber();
  const answer = getAnswer(q);
  const correctAnswer = isEven(answer) ? 'yes' : 'no';
  if (q % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      i++;
    } else if (answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}`);
      break;
    }
  }
  if (q % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
      i++;
    } else if (answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}`);
    break;
  }
}
