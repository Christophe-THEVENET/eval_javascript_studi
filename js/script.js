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
    let player1 = new Player(player1NameInput, player1Img);
    let player2 = new Player(player2NameInput, player2Img);

    /*affiche le nom des joueurs*/
    player1.showPlayerName(player1NameOutput, player1NameOutputMobile);
    player2.showPlayerName(player2NameOutput, player2NameOutputMobile);

    player1.activePlayer();
    player1.inGame = true;

    const nextPlayer = () => {
        if (player1.inGame === true) {
            player1.inGame = false;
            player2.inGame = true;
            player1.unactiveImgPlayer();
            player2.activePlayer();
        } else {
            player1.inGame = true;
            player2.inGame = false;
            player1.activePlayer();
            player2.unactiveImgPlayer();
        }
    };

    /*-----------  LANCER DE DE PLAYER 1  -------------------*/

    rollBtn.addEventListener('click', () => {
        /* lancer du dé*/
        let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        dice.dataset.side = result;
        dice.classList.toggle('reRoll');
        playSound('sound/dice.mp3', 0.7);

        /*  player 1 fait 1*/
        if (player1.inGame && result === 1) {
            player1.setRound0();
            player1RoundOutput.textContent = player1.getRound();
            player1.flashLose(player1RoundOutput);
            player1.flashLose(title);
            nextPlayer();
            /*  player 1 fait !=1*/
        } else if (player1.inGame && result !== 1) {
            player1.setRound(result);
            player1RoundOutput.textContent = player1.getRound();
            player1.flashWin(player1RoundOutput);
            /*  player 2 fait 1*/
        } else if (player2.inGame && result === 1) {
            player2.setRound0();
            player2RoundOutput.textContent = player2.getRound();
            player1.flashLose(title);
            nextPlayer();
            /*  player 2 fait !=1*/
        } else if (player2.inGame && result !== 1) {
            player2.setRound(result);
            player2RoundOutput.textContent = player2.getRound();
        }
    });
});
