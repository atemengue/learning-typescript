/** @format */

import { Result } from './result';

export class Scoreboard {
  private results: Result[] = [];

  addResult(newResult: Result): void {
    this.results.push(newResult);
  }

  updateScoreboard(): void {
    //write code there!!
  }
}
