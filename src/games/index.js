import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');
const getName = () => readlineSync.question('May I have your name? ');
const roundsCount = 3;
const getRandomNum = (max) => Math.floor(Math.random() * max) + 1;
const takeCongratulations = (name) => {
  const congratulations = `Congratulations, ${name}!`;
  console.log(congratulations);
};
const rightMessage = () => console.log('Correct!');
const errorMessage = (userAnswer, correctAnswer, userName) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);

const gameLogic = (description, game) => {
  welcome();
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      errorMessage(userAnswer, correctAnswer, userName);
      return;
    }
    rightMessage();
  }
  takeCongratulations(userName);
};

export {
  getRandomNum, gameLogic,
};
