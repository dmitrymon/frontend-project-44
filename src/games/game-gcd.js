import readlineSync from 'readline-sync';

import { generateRandomNumber } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivider = (number1, number2) => {
  let max = 1;
  if (number1 === number2) {
    max = number1;
  } else if (number1 < number2) {
    for (let j = 1; j <= number1; j += 1) {
      if (number1 % j === 0 && number2 % j === 0) {
        max = j;
      }
    }
  } else {
    for (let j = 1; j <= number2; j += 1) {
      if (number1 % j === 0 && number2 % j === 0) {
        max = j;
      }
    }
  }
  return max.toString();
};

const startRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const userAnswer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}
Your answer: `);
  const correctAnswer = greatestCommonDivider(randomNumber1, randomNumber2);
  return [userAnswer, correctAnswer];
};

export { rules, startRound };
