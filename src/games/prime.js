import { getRandomNum, gameLogic } from './index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const gameRound = () => {
  const question = getRandomNum(100);
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, gameRound);
};
