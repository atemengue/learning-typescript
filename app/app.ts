/** @format */

function startGame() {
  // start a new game init

  let playName: string = 'Regis';
  logPlayer(playName);

  let messagesElement: HTMLElement | string =
    document.getElementById('messages');

  messagesElement = document.getElementById('messages');
  messagesElement!.innerHTML = 'Welcomme to game! Start new Game';
}

function logPlayer(name) {
  console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
