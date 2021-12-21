/*-------------  GESTION DES MODALES --------------*/

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

/*----------------- LANCER LE JEU -------------------*/

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

    showNamePlayer();
    animImg(player1Img, player1ImgMobile);
});

