import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
function greetings() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
}
export default greetings;
