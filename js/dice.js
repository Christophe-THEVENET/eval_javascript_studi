let dice = document.getElementById('dice');
let rollBtn = document.getElementById('roll');

function rollDice() {
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle('reRoll');
    playSound('sound/dice.mp3');
    console.log(result);
}

rollBtn.addEventListener('click', rollDice);
