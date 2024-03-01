#!usr/bin/env node
/* eslint-disable import/order */
/* eslint-disable import/first */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
import { a } from '../src/cli.js';

a();

import readlineSync from 'readline-sync';
import brainProgression from '../src/games/brain-progression.js';
import brainScm from '../src/games/brain-scm.js';

function showMenu() {
  console.log('Welcome to the menu-game!');
  console.log("Choose the game!");
  console.log('1. brain-scm');
  console.log('2. brain-progression');
  console.log('0. Exit');
}

function runGame(gameNumber) {
  switch (gameNumber) {
    case '1':
      brainScm();
      break;
    case '2':
      brainProgression();
      break;
    case '0':
      console.log('Goodbye!');
      break;
    default:
      console.log('Invalid choice. Please select a valid option.');
      break;
  }
}

function startMenu() {
  let choice = '';

  while (choice !== '0') {
    showMenu();
    choice = readlineSync.question('Enter the number of the game you want to play: ');

    runGame(choice);
  }
}

startMenu();
