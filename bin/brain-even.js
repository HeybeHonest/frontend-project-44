#!/usr/bin/env node
/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
let i = 0;
let rightAnswer = '';
while (i < 4) {
  const q = Math.floor(Math.random() * 100);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${q}`);
  const answer = readlineSync.question('Answer: ');
  if (q % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
      i++;
    } else if (answer !== 'yes') {
      rightAnswer = 'yes';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${rightAnswer}`);
      break;
    }
  }
  if (q % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
      i++;
    } else if (answer !== 'no') {
      rightAnswer = 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${rightAnswer}`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}`);
    break;
  }
}
