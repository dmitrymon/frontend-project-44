import readlineSync from 'readline-sync';

import { generateRandomNumber } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const startRound = () => {
  const randomNumber = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${randomNumber}
Your answer: `);
  const correctAnswer = isEven(randomNumber);
  return [userAnswer, correctAnswer];
};

export { rules, startRound };
