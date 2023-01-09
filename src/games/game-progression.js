import readlineSync from 'readline-sync';

import generateRandomNumber from '../randomNumberGenerator.js';

import startGame from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = () => {
  const minSize = 5;
  const maxSize = 10;
  const progressionSize = generateRandomNumber(maxSize, minSize);
  const firstNumber = generateRandomNumber();
  const progression = [firstNumber];
  const stepSizeLimit = 10;
  const stepSize = generateRandomNumber(stepSizeLimit, 1);
  let nextNumber = firstNumber + stepSize;
  for (let i = 1; i < progressionSize; i += 1) {
    progression.push(nextNumber);
    nextNumber += stepSize;
  }
  return [progressionSize, progression];
};

const startRound = () => {
  const [progressionSize, progression] = generateProgression();
  const gapIndexLimit = progressionSize;
  const gapIndex = generateRandomNumber(gapIndexLimit);
  const correctAnswer = progression[gapIndex].toString();
  progression[gapIndex] = '..';
  const userAnswer = readlineSync.question(`Question: ${progression.join(' ')}
Your answer: `);
  return [userAnswer, correctAnswer];
};

const runGame = () => startGame(rules, startRound);

export default runGame;
