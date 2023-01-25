/** @format */

import { Player } from './player';
import { Scoreboard as ResultPanel } from './scoreboard';

export class Game {
  private scoreboard: ResultPanel = new ResultPanel();
  player: Player;
  problemCount: number;
  factor: number;

  // you can used another syntax for constructor
  constructor(newPlayer: Player, numOfProblems: number, multFactor: number) {
    this.player = newPlayer;
    this.problemCount = numOfProblems;
    this.factor = multFactor;
  }

  displayGame(): void {
    // write code here
  }

  calculateScore(): void {
    // write code here
  }
}
