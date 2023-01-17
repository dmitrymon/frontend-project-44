import generateRandomNumber from '../randomNumberGenerator.js';

import startGame from '../index.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [start];
  let nextNumber = start + step;
  for (let i = 1; i < length; i += 1) {
    progression.push(nextNumber);
    nextNumber += step;
  }
  return progression;
};

const startRound = () => {
  const firstNumber = generateRandomNumber();

  const stepSizeMax = 10;
  const stepSizeMin = 1;
  const stepSize = generateRandomNumber(stepSizeMax, stepSizeMin);

  const maxLength = 10;
  const minLength = 5;
  const progressionLength = generateRandomNumber(maxLength, minLength);

  const progression = generateProgression(firstNumber, stepSize, progressionLength);

  const gapIndexLimit = progressionLength - 1;
  const gapIndex = generateRandomNumber(gapIndexLimit);

  const correctAnswer = progression[gapIndex].toString();
  progression[gapIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, correctAnswer];
};

const runGame = () => startGame(rule, startRound);

export default runGame;
