import readlineSync from 'readline-sync';

import generateRandomNumber from '../randomNumberGenerator.js';

import startGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startRound = () => {
  const randomNumber = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${randomNumber}
Your answer: `);
  const correctAnswer = (isPrime(randomNumber) ? 'yes' : 'no');
  return [userAnswer, correctAnswer];
};

const runGame = () => startGame(rules, startRound);

export default runGame;
