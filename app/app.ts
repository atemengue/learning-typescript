/** @format */

function startGame() {
  // start a new game init

  let playName: string | undefined = getInputValue('playername');
  logPlayer(playName);

  postScore(80, playName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );
  console.log(inputElement);
  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(score: number, playName: string = 'MultiMath Player'): void {
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null =
    document.getElementById('postedScores');
  scoreElement!.innerHTML = `${score} - ${playName}`;

  logger(`Score ${score}`);
}

const scores: number[] = [10, 20, 45, 89, 30, 69];

let highscores: number[] = scores.filter((value) => value >= 50);

console.log(highscores);

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
  console.log(err);
}

let myResult: Result = {
  playerName: 'Regis',
  score: 5,
  problemCount: 5,
  factor: 7,
};

let player: Person = {
  name: 'Daniel',
  formatName: () => 'Daniel',
};

const firstPlayer: Player = new Player();
firstPlayer.name = 'Regis';
console.log(firstPlayer);
