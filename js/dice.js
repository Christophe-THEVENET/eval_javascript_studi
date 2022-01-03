let dice = document.getElementById('dice');
let rollBtn = document.getElementById('roll');
let diceMobile = document.getElementById('dice-mobile');

let rollBtnMobile = document.getElementById('roll-mobile');

/*lancer dé*/
function rollDice() {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle('reRoll');
    playSound('sound/dice.mp3', 1);
    console.log(result);
    return result;
}

/*lancer dé mobile*/
function rollDiceMobile() {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    diceMobile.dataset.side = result;
    diceMobile.classList.toggle('reRoll');
    playSound('sound/dice.mp3', 1);
    return result;
}

/*écoute du bouton lancer*/
rollBtn.addEventListener('click', rollDice);
rollBtnMobile.addEventListener('click', rollDiceMobile);
