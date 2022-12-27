#!/usr/bin/env node

import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!
What is the result of the expression?`);

const operators = ['+', '-', '*'];

const generateRandomOperator = () => Math.floor(Math.random() * 3);

const generateRandomNumber = () => Math.round(Math.random() * 100);

const sumOfNumbers = (x, y) => (x + y);

const differenceOfNumbers = (x, y) => (x - y);

const productOfNumbers = (x, y) => (x * y);

const startRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const operatorIndex = operators[generateRandomOperator()];
  let answer;
  let correctAnswer;
  if (operatorIndex === 0) {
    answer = readlineSync.question(`Question: ${randomNumber1} + ${randomNumber2}
Your answer: `);
    correctAnswer = sumOfNumbers(randomNumber1, randomNumber2);
  } else if (operatorIndex === 1) {
    answer = readlineSync.question(`Question: ${randomNumber1} - ${randomNumber2}
Your answer: `);
    correctAnswer = differenceOfNumbers(randomNumber1, randomNumber2);
  } else if (operatorIndex === 2) {
    answer = readlineSync.question(`Question: ${randomNumber1} * ${randomNumber2}
Your answer: `);
    correctAnswer = productOfNumbers(randomNumber1, randomNumber2);
  }

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

startRound();
