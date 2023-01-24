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
  const scoreElement: HTMLElement | null =
    document.getElementById('postedScores');
  scoreElement!.innerHTML = `${score} - ${playName}`;
}
document.getElementById('startGame')!.addEventListener('click', startGame);
