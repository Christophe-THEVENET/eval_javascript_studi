



/*lancer dé mobile*/
function rollDiceMobile() {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    diceMobile.dataset.side = result;
    diceMobile.classList.toggle('reRoll');
    playSound('sound/dice.mp3', 0.7);
    return result;
}
