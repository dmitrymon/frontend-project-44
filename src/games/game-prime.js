import readlineSync from 'readline-sync';

import { generateRandomNumber, startGame } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  const dividers = [1];
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }
  dividers.push(number);
  return (dividers[1] === number ? 'yes' : 'no');
};

const startRound = () => {
  const randomNumber = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${randomNumber}
Your answer: `);
  const correctAnswer = isPrime(randomNumber);
  return [userAnswer, correctAnswer];
};

const runGame = () => startGame(rules, startRound);

export default runGame;
