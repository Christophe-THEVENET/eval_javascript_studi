/*commandes modale régles*/
let rulesModal = document.querySelector('.rules-modal');
let btnRulesModal = document.querySelector('#btn-modal');
let btnRulesModalMobile = document.querySelector('#btn-modal-mobile');
let btnCloseModal = document.querySelector('#btn-close-rules-modal');
let newGameModal = document.querySelector('.new-game-modal');
let btnNewGame = document.querySelector('#btn-new-game');
let btnNewGameMobile = document.querySelector('#btn-modal-ng-mobile');
let btnStartNewGame = document.querySelector('#btn-close-ng-modal');

/*fermer la modale rules*/
btnCloseModal.addEventListener('click', () => {
    rulesModal.style.display = 'none';
});

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

/*lancer le jeu*/
btnStartNewGame.addEventListener('click', () => {
    newGameModal.style.display = 'none';
    playSound('sound/intro.mp3', 0.2);
    /*decalage du son round fight*/
    setTimeout(() => {
        playSound('sound/round.mp3', 0.2);
    }, 500);
    setTimeout(() => {
        playSound('sound/fight.mp3', 0.2);
    }, 1500);
});
