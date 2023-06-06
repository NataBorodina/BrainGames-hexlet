import { getRandomNum, gameLogic } from './index.js';

const description = 'What number is missing in the progression?';

const takeArray = (start, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(start + step * i);
  }
  return arr;
};

const takeGameArray = (arr, spaseIndex) => {
  const gameArray = arr;
  gameArray[spaseIndex] = '..';
  return gameArray.join(' ');
};

const gameRound = () => {
  const start = getRandomNum(100);
  const step = getRandomNum(100);
  const length = 10;
  const array = takeArray(start, step, length);
  const spaseIndex = Math.floor(Math.random() * 9) + 1;
  const correctAnswer = String(array[spaseIndex]);
  const gameArray = takeGameArray(array, spaseIndex);
  const question = `Question: ${gameArray}`;
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, gameRound);
};
