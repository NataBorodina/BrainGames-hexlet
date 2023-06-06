import { getRandomNum, gameLogic } from './index.js';

const description = 'What is the result of the expression?';

const gameRound = () => {
  const number1 = getRandomNum(100);
  const number2 = getRandomNum(100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${number1} ${operator} ${number2}`;
  // eslint-disable-next-line no-eval
  const correctAnswer = String(eval(`${number1} ${operator} ${number2}`));
  return [question, correctAnswer];
};

export default () => {
  gameLogic(description, gameRound);
};
