function startGame() {
    let playName = 'Regis';
    logPlayer(playName);
    let messagesElement = document.getElementById('messages');
    messagesElement = document.getElementById('messages');
    messagesElement.innerHTML = 'Welcomme to game! Start new Game';
}
function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}
document.getElementById('startGame').addEventListener('click', startGame);
