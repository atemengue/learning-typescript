class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
class Utility {
    static getInputValue(elementID) {
        const inputElement = (document.getElementById(elementID));
        return inputElement.value;
    }
}
class Scoreboard {
    constructor() {
        this.results = [];
    }
    addResult(newResult) {
        this.results.push(newResult);
    }
    updateScoreboard() {
    }
}
class Game {
    constructor(newPlayer, numOfProblems, multFactor) {
        this.scoreboard = new Scoreboard();
        this.player = newPlayer;
        this.problemCount = numOfProblems;
        this.factor = multFactor;
    }
    displayGame() {
    }
    calculateScore() {
    }
}
let newGame;
document.getElementById('startGame').addEventListener('click', () => {
    const player = new Player();
    player.name = Utility.getInputValue('playname');
    const problemCount = Number(Utility.getInputValue('problemCount'));
    const factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
    document.getElementById('calculate').addEventListener('click', () => {
        newGame.calculateScore();
    });
});
