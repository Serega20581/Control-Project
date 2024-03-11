#!usr/bin/env node

import readlineSync from 'readline-sync';

import runBrainProgression from './games/brain-progression.js';

import runBrainScm from './games/brain-scm.js';

const a = () => {
  function showMenu() {
    console.log('Welcome to the menu-game!');
    console.log('Choose the game!');
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
export default a;
