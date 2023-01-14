import generateRandomNumber from '../randomNumberGenerator.js';

import startGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (number1, number2) => {
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
  const maxNum = 100;
  const minNum = 1;
  const randomNumber1 = generateRandomNumber(maxNum, minNum);
  const randomNumber2 = generateRandomNumber(maxNum, minNum);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const correctAnswer = greatestCommonDivisor(randomNumber1, randomNumber2);
  return [question, correctAnswer];
};

const runGame = () => startGame(rules, startRound);

export default runGame;
