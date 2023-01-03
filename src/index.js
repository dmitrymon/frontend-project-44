import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.round(Math.random() * 100);

const startGame = (rules, startRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [userAnswer, correctAnswer] = startRound();
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { generateRandomNumber, startGame };
