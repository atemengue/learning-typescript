/** @format */

import * as _ from 'lodash';
import { Result } from './result';

export class Scoreboard {
  private results: Result[] = [];

  addResult(newResult: Result): void {
    this.results.push(newResult);
    let addCapsName: string = _.upperCase('regis');
  }

  updateScoreboard(): void {
    //write code there!!
  }
}
