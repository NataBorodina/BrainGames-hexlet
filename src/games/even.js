import { getRandomNum, gameLogic } from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameRound = () => {
  const number = getRandomNum(100);
  const correctAnswer = (isEven(number) ? 'yes' : 'no');
  return [number, correctAnswer];
};

export default () => {
  gameLogic(description, gameRound);
};
