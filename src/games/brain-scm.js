#!usr/bin/env node
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';

function calculateLCM(num1, num2) {
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  return (num1 * num2) / gcd(num1, num2);
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runBrainScm() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nFind the smallest common multiple of given numbers.`);

  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const num3 = generateRandomNumber(1, 100);
    const expression = `${num1} ${num2} ${num3}`;
    const correctAnswer = calculateLCM(calculateLCM(num1, num2), num3);

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default runBrainScm;
