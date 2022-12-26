#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!
Answer "yes" if the number is even, otherwise answer "no".`);

const generateRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const startRound = () => {
  const randomNumber = generateRandomNumber();
  const answer = readlineSync.question(`Question: ${randomNumber}
  Your answer: `);
  const correctAnswer = isEven(randomNumber);

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

startGame();
