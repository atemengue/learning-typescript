function startGame() {
    let playName = getInputValue('playername');
    logPlayer(playName);
    postScore(80, playName);
}
function logPlayer(name = 'MultiMath Player') {
    console.log(`New game starting for player: ${name}`);
}
function getInputValue(elementID) {
    const inputElement = (document.getElementById(elementID));
    console.log(inputElement);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playName = 'MultiMath Player') {
    const scoreElement = document.getElementById('postedScores');
    scoreElement.innerHTML = `${score} - ${playName}`;
}
document.getElementById('startGame').addEventListener('click', startGame);
