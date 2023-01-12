import readlineSync from 'readline-sync';

import generateRandomNumber from '../randomNumberGenerator.js';

import startGame from '../index.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  let answer;
  switch (operator) {
    case '+':
      answer = `${num1 + num2}`;
      break;
    case '-':
      answer = `${num1 - num2}`;
      break;
    case '*':
      answer = `${num1 * num2}`;
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
  return answer;
};

const startRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const operator = operators[generateRandomNumber(operators.length - 1)];
  const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${operator} ${randomNumber2}
Your answer: `);
  const correctAnswer = calculate(randomNumber1, randomNumber2, operator);
  return [userAnswer, correctAnswer];
};

const runGame = () => startGame(rules, startRound);

export default runGame;
