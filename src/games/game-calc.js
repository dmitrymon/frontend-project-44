import readlineSync from 'readline-sync';

import generateRandomNumber from '../randomNumberGenerator.js';

import startGame from '../index.js';

const rules = 'What is the result of the expression?';

const startRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const operators = ['+', '-', '*'];
  const lastOperatorIndex = 2;
  const operator = operators[generateRandomNumber(lastOperatorIndex)];
  const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${operator} ${randomNumber2}
Your answer: `);
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = `${randomNumber1 + randomNumber2}`;
      break;
    case '-':
      correctAnswer = `${randomNumber1 - randomNumber2}`;
      break;
    case '*':
      correctAnswer = `${randomNumber1 * randomNumber2}`;
      break;
    default:
  }
  return [userAnswer, correctAnswer];
};

const runGame = () => startGame(rules, startRound);

export default runGame;
