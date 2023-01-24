"use strict";
function startGame() {
    let messagesElement = document.getElementById('messages');
    messagesElement.innerHTML = 'Welcomme to game! Start new Game';
}
document.getElementById('startGame').addEventListener('click', startGame);
