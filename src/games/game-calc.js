import readlineSync from 'readline-sync';

import { generateRandomNumber, startGame } from '../index.js';

const operators = ['+', '-', '*'];

const generateRandomOperator = () => Math.floor(Math.random() * 3);

const sumOfNumbers = (x, y) => (x + y);

const differenceOfNumbers = (x, y) => (x - y);

const productOfNumbers = (x, y) => (x * y);

const rules = 'What is the result of the expression?';

const startRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const operatorIndex = generateRandomOperator();
  let userAnswer;
  let correctAnswer;
  if (operatorIndex === 0) {
    userAnswer = readlineSync.question(`Question: ${randomNumber1} ${operators[0]} ${randomNumber2}
Your answer: `);
    correctAnswer = sumOfNumbers(randomNumber1, randomNumber2).toString();
  } else if (operatorIndex === 1) {
    userAnswer = readlineSync.question(`Question: ${randomNumber1} ${operators[1]} ${randomNumber2}
Your answer: `);
    correctAnswer = differenceOfNumbers(randomNumber1, randomNumber2).toString();
  } else if (operatorIndex === 2) {
    userAnswer = readlineSync.question(`Question: ${randomNumber1} ${operators[2]} ${randomNumber2}
Your answer: `);
    correctAnswer = productOfNumbers(randomNumber1, randomNumber2).toString();
  }
  return [userAnswer, correctAnswer];
};

const runGame = () => startGame(rules, startRound);

export default runGame;
