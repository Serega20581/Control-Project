#!usr/bin/env node

import { b, getName } from '../index.js';

function calculateLCM(num1, num2) {
  const gcd = (a, c) => {
    if (c === 0) {
      return a;
    }
    return gcd(c, a % c);
  };

  return (num1 * num2) / gcd(num1, num2);
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runBrainScm() {
  const name = getName();

  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    const num3 = generateRandomNumber(1, 100);
    const expression = `${num1} ${num2} ${num3}`;
    const correctAnswer = calculateLCM(calculateLCM(num1, num2), num3);
    const userAnswer = b(3, name, expression);
    if (Number(userAnswer) === correctAnswer) {
      b(4, name);
    } else {
      b(5, name, 0, userAnswer, correctAnswer);
      return;
    }
  }

  b(6, name);
}

export default runBrainScm;
