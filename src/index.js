#!usr/bin/env node

import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);
  return name;
};

const b = (l, name, k, userAns = '', correctAns = '') => {
  if (l === 3) {
    console.log(`Question: ${k}`);
    const userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
  }
  if (l === 4) {
    console.log('Correct!');
  }
  if (l === 5) {
    console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
    console.log(`Let's try again, ${name}!`);
  }
  if (l === 6) {
    console.log(`Congratulations, ${name}!`);
  }
  return undefined;
};
export { getName, b };
