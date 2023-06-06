import { getRandomNum, gameLogic } from './index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const gameRound = () => {
  const number1 = getRandomNum(100);
  const number2 = getRandomNum(100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));

  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, gameRound);
};
