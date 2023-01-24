/** @format */

function startGame() {
  // start a new game init
  let messagesElement = document.getElementById('messages');
  messagesElement!.innerHTML = 'Welcomme to game! Start new Game';
}

document.getElementById('startGame')!.addEventListener('click', startGame);
