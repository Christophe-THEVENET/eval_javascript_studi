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

    /*recupere les noms des joueurs*/
    let player1NameInput = document.querySelector('#player1-input').value;
    let player2NameInput = document.querySelector('#player2-input').value;
    /*afficher score a atteindre*/
    let scoreToWinInput = document.querySelector('#win-score-input').value;
    scoreToWinOutput.textContent = `total (${scoreToWinInput})`;
    scoreToWinOutputMobile.textContent = `total ${scoreToWinInput}`;


    /*instance des nouveaux joueurs*/
    let player1 = new Player(player1NameInput, 0, 0, player1Img);
    let player2 = new Player(player2NameInput, 0, 0, player2Img);

    /*affiche le nom des joueurs*/
    player1.showPlayerName(player1NameOutput, player1NameOutputMobile, player1Img);
    player2.showPlayerName(player2NameOutput, player2NameOutputMobile);

    player1.activeImgPlayer();
    player2.activeImgPlayer();

    /*-----------  LANCER DE DE PLAYER 1  -------------------*/




    rollBtn.addEventListener('click', () => {
    player1.activeImgPlayer();

        someRoundRollDice(player1, player1RoundOutput, rollDice());

        if (player1.NumberOne === true) {

        } 
    });
});
