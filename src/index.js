import readlineSync from 'readline-sync';

const roundCount = 3;

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');

const startGame = (gameTitle, gameEngine) => {
  console.log(`Hello, ${userName}`);
  console.log(gameTitle);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = gameEngine();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}.`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
