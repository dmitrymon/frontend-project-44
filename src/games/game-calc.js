import readlineSync from 'readline-sync';

import generateRandomNumber from '../random-number-generator.js';

import startGame from '../index.js';

const rules = 'What is the result of the expression?';

const generateRandomOperator = () => Math.floor(Math.random() * 3);

const startRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomOperator()];
  let userAnswer;
  let correctAnswer;
  switch (operator) {
    case '+':
      userAnswer = readlineSync.question(`Question: ${randomNumber1} + ${randomNumber2}
Your answer: `);
      correctAnswer = (randomNumber1 + randomNumber2).toString();
      break;
    case '-':
      userAnswer = readlineSync.question(`Question: ${randomNumber1} - ${randomNumber2}
Your answer: `);
      correctAnswer = (randomNumber1 - randomNumber2).toString();
      break;
    case '*':
      userAnswer = readlineSync.question(`Question: ${randomNumber1} * ${randomNumber2}
Your answer: `);
      correctAnswer = (randomNumber1 * randomNumber2).toString();
      break;
    default:
  }
  return [userAnswer, correctAnswer];
};

const runGame = () => startGame(rules, startRound);

export default runGame;
