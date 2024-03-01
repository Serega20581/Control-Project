#!usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import readlineSync from 'readline-sync';

function generateGeometricProgression(length) {
  const start = Math.floor(Math.random() * 10) + 1;
  const ratio = Math.floor(Math.random() * 5) + 2;
  const progression = [start];

  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] * ratio);
  }

  return progression;
}

function hideElement(progression) {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { hiddenValue, progression };
}

function brainProgression() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);

  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const { hiddenValue, progression } = hideElement(generateGeometricProgression(progressionLength));
    const expression = progression.join(' ');
    const correctAnswer = hiddenValue;

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

export default brainProgression;
