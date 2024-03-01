#!usr/bin/env node
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const a = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export { a };
