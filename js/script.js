/*---------------------  HTML MODALE -----------------------*/
/*commandes modale régles*/
let rulesModal = document.querySelector('.rules-modal');
let btnRulesModal = document.querySelector('#btn-modal');
let btnRulesModalMobile = document.querySelector('#btn-modal-mobile');
let btnCloseModal = document.querySelector('#btn-close-rules-modal');
let newGameModal = document.querySelector('.new-game-modal');
let btnNewGame = document.querySelector('#btn-new-game');
let btnNewGameMobile = document.querySelector('#btn-modal-ng-mobile');
let btnStartNewGame = document.querySelector('#btn-close-ng-modal');

/*---------  HTML NOM JOUEURS ET SCORE A ATTEINDRE INPUT -----------------*/

let player1NameInput = document.querySelector('#player1-input');
let player2NameInput = document.querySelector('#player2-input');
let scoreToWinInput = document.querySelector('#win-score-input');

/*---------  HTML NOM DES JOUEURS OUTPUT----------------*/
/* desktop*/
let player1NameOutput = document.querySelector('#player1-output');
let player2NameOutput = document.querySelector('#player2-output');
let scoreToWinOutput = document.querySelector('#win-score-output');
/* mobile*/
/* let player1NameOutput = document.querySelector('#player1-output');
let player2NameOutput = document.querySelector('#player2-output');
let scoreToWinOutput = document.querySelector('#win-score-output'); */






/*---------------------  GESTION DES MODALES -----------------------*/

/*ouvrir la modale rules*/
btnRulesModal.addEventListener('click', () => {
    playSound('sound/select.wav', 0.3);
    rulesModal.style.display = 'flex';
});
/*ouvrir la modale rules mobile*/
btnRulesModalMobile.addEventListener('click', () => {
    playSound('sound/select.wav', 0.3);
    rulesModal.style.display = 'flex';
});

/*fermer la modale rules*/
btnCloseModal.addEventListener('click', () => {
    rulesModal.style.display = 'none';
});

/*ouvrir la modale newGame*/
btnNewGame.addEventListener('click', () => {
    newGameModal.style.display = 'flex';
    playSound('sound/new-game.wav', 0.8);
});

/*ouvrir la modale newGame mobile*/
btnNewGameMobile.addEventListener('click', () => {
    newGameModal.style.display = 'flex';
    playSound('sound/new-game.wav', 0.8);
});

/*-------------------- LANCER LE JEU ------------------------*/

btnStartNewGame.addEventListener('click', () => {
    newGameModal.style.display = 'none';
    playSound('sound/intro.mp3', 0.2);
    /*decalage du son round*/
    setTimeout(() => {
        playSound('sound/round.mp3', 0.2);
    }, 500);
    /*decalage du son fight*/
    setTimeout(() => {
        playSound('sound/fight.mp3', 0.2);
    }, 1500);

    /*afficher nom des joueurs*/
    player1NameOutput.textContent = player1NameInput.value
    player2NameOutput.textContent = player2NameInput.value
    scoreToWinOutput.textContent = `total (${scoreToWinInput.value})`

    player1NameOutput.textContent = 'qsdfq'
    player2NameOutput.textContent = 'sdfqsdf'
    scoreToWinOutput.textContent = `total (40)`

});
