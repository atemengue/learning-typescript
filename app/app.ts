/** @format */

import { Game } from './game';
import { Player } from './player';
import * as Helpers from './utility';
/** @format */

// refactoring app main
let newGame: Game;

// add click handler to the start game button

document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Helpers.getValue('playname');

  const problemCount: number = Number(Helpers.getValue('problemCount'));
  const factor: number = Number(Helpers.getValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();

  // add click handler to the calculate score button
  document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
  });
});
