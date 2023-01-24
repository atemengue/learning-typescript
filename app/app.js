/** @format */
function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerHTML = 'Welcomme to game! Start new Game';
}
document.getElementById('startGame').addEventListener('click', startGame);
