import readlineSync from 'readline-sync';

import { generateRandomNumber, startGame } from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgressionSize = () => {
  const minSize = 5;
  const maxSize = 10;
  return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
};

const generateStepSize = () => Math.ceil(Math.random() * 10);

const progressionSize = generateProgressionSize();

let progression = [];

const generateProgression = () => {
  const firstNumber = generateRandomNumber();
  progression = [firstNumber];
  const stepSize = generateStepSize();
  let nextNumber = firstNumber + stepSize;
  for (let i = 1; i < progressionSize; i += 1) {
    progression.push(nextNumber);
    nextNumber += stepSize;
  }
  return progression;
};

const generateGapIndex = () => Math.floor(Math.random() * progressionSize);

const startRound = () => {
  progression = generateProgression();
  const gapIndex = generateGapIndex();
  const correctAnswer = progression[gapIndex].toString();
  progression[gapIndex] = '..';
  const userAnswer = readlineSync.question(`Question: ${progression.join(' ')}
Your answer: `);
  return [userAnswer, correctAnswer];
};

const runGame = () => startGame(rules, startRound);

export default runGame;
