import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const greetingsAndName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  return userName;
};

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};
