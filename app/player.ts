/** @format */

class Player implements Person {
  name: string;
  age?: number | undefined;
  highScore: number;

  formatName() {
    return this.name.toUpperCase();
  }
}
