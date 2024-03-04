#!usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { b, getName } from '../index.js';

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

function runBrainProgression() {
  const name = getName();

  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const { hiddenValue, progression } = hideElement(generateGeometricProgression(progressionLength));
    const expression = progression.join(' ');
    const correctAnswer = hiddenValue;
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

export default runBrainProgression;
