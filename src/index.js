import readlineSync from 'readline-sync';

const roundCount = 3;

const startGame = (gameTitle, gameEngine) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  let upperName = userName;
  upperName = upperName[0].toUpperCase() + upperName.slice(1);
  const congrats = `Congratulations, ${upperName}!`;
  console.log(`Hello, ${upperName}`);
  console.log(gameTitle);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = gameEngine();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${upperName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(congrats);
};

export default startGame;
