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
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    const scoreElement = document.getElementById('postedScores');
    scoreElement.innerHTML = `${score} - ${playName}`;
    logger(`Score ${score}`);
}
const scores = [10, 20, 45, 89, 30, 69];
let highscores = scores.filter((value) => value >= 50);
console.log(highscores);
document.getElementById('startGame').addEventListener('click', startGame);
const logMessage = (message) => console.log(message);
function logError(err) {
    console.log(err);
}
