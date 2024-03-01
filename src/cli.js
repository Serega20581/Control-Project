#!usr/bin/env node
/* eslint-disable no-unreachable-loop */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/extensions */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

import runBrainProgression from '../src/games/brain-progression.js';
import runBrainScm from '../src/games/brain-scm.js';
const a = () => {
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
        runBrainScm();
        break;
      case '2':
        runBrainProgression();
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
      return;
    }
  }
  startMenu();
};
export { a };
