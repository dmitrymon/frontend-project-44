import readlineSync from 'readline-sync';

import generateRandomNumber from '../random-number-generator.js';

import startGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const randomNumber = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${randomNumber}
Your answer: `);
  const correctAnswer = (isEven(randomNumber) ? 'yes' : 'no');
  return [userAnswer, correctAnswer];
};

const runGame = () => startGame(rules, startRound);

export default runGame;
