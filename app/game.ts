/** @format */

/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
  private scoreboard: Scoreboard = new Scoreboard();
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
