/*effet pour guider  sur  bouton nouvelle partie */
document.addEventListener('DOMContentLoaded', () => {
    for (btnNewGame of btnNewGameAll) {
        btnNewGame.classList.add('btn-insist');
    }
});

/*-------------  GESTION DES MODALES --------------*/
/*ouvrir la modale rules desktop et mobile*/
for (btnRules of btnRulesAll) {
    btnRules.addEventListener('click', () => {
        playSound('sound/select.wav', 0.3);
        rulesModal.style.display = 'flex';
    });
}
/*fermer la modale rules*/
btnCloseRules.addEventListener('click', () => {
    rulesModal.style.display = 'none';
});
/*ouvrir la modale newGame desktop et mobile*/
for (btnNewGame of btnNewGameAll) {
    btnNewGame.addEventListener('click', () => {
        newGameModal.style.display = 'flex';
        playSound('sound/new-game.wav', 0.8);
    });
}

/*----------------- LANCER LE JEU -------------------*/

btnStartNewGame.addEventListener('click', () => {
    /*supprime le guide bouton nouvelle parties */
    for (btnNewGame of btnNewGameAll) {
        btnNewGame.classList.remove('btn-insist');
    }
    for (btnRoll of rollBtnAll) {
        btnRoll.classList.add('btn-insist');
    }
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
    let player1 = new Player(player1NameInput, player1Img, player1ImgMobile);
    let player2 = new Player(player2NameInput, player2Img, player2ImgMobile);

    /*affiche le nom des joueurs*/
    player1.showPlayerName(player1NameOutput, player1NameOutputMobile);
    player2.showPlayerName(player2NameOutput, player2NameOutputMobile);

    /*reset des scores*/
    player1.setRound0();
    player2.setRound0();
    player1.setGlobal0();
    player2.setGlobal0();
    player1RoundOutput.textContent = player1.getRound();
    player2RoundOutput.textContent = player2.getRound();
    player1RoundOutputMobile.textContent = player2.getRound();
    player2RoundOutputMobile.textContent = player2.getRound();
    player1GlobalOutput.textContent = player1.getGlobal();
    player2GlobalOutput.textContent = player2.getGlobal();
    player1GlobalOutput.textContent = player2.getGlobal();
    player2GlobalOutputMobile.textContent = player2.getGlobal();

    /**active le joueur 1 */
    player1.activePlayer();
    player1.inGame = true;

    /**changement de joueur */
    const nextPlayer = () => {
        if (player1.inGame === true) {
            player1.inGame = false;
            player2.inGame = true;
            player1.unactivePlayer();
            player2.activePlayer();
            playSound('sound/switch.wav', 0.2);
        } else {
            player1.inGame = true;
            player2.inGame = false;
            player1.activePlayer();
            player2.unactivePlayer();
            playSound('sound/switch.wav', 0.2);
        }
    };

    /*-----------  LANCER LE DE  -------------------*/

    for (rollBtn of rollBtnAll) {
        rollBtn.addEventListener('click', () => {
            /**supprime le guide boutons lancer */
            for (rollBtn of rollBtnAll) {
                rollBtn.classList.remove('btn-insist');
            }
            /* lancer du dé*/
            let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            dice.dataset.side = result;
            dice.classList.toggle('reRoll');
            diceMobile.dataset.side = result;
            diceMobile.classList.toggle('reRoll');
            playSound('sound/dice.mp3', 0.7);
            /**sup guide bouton lancer */
            /*  player 1 fait 1*/
            if (player1.inGame && result === 1) {
                player1.setRound0();
                player1RoundOutput.textContent = player1.getRound();
                player1RoundOutputMobile.textContent = player1.getRound();
                player1.flashLose(player1RoundOutput);
                player1.flashLose(player1RoundOutputMobile);
                player1.flashLose(title);
                nextPlayer();
                playSound('sound/dieguy.wav', 0.2);

                /*  player 1 fait !=1*/
            } else if (player1.inGame && result !== 1) {
                player1.setRound(result);
                player1RoundOutput.textContent = player1.getRound();
                player1RoundOutputMobile.textContent = player1.getRound();
                player1.flashWin(player1RoundOutput);
                player1.flashWin(player1RoundOutputMobile);
                playSound('sound/ryuken-hadooken.mp3', 0.1);

                /*  player 2 fait 1*/
            } else if (player2.inGame && result === 1) {
                player2.setRound0();
                player2RoundOutput.textContent = player2.getRound();
                player2RoundOutputMobile.textContent = player2.getRound();
                player2.flashLose(player2RoundOutput);
                player2.flashLose(player2RoundOutputMobile);
                player2.flashLose(title);
                nextPlayer();
                playSound('sound/diegirl.wav', 0.2);

                /*  player 2 fait !=1*/
            } else if (player2.inGame && result !== 1) {
                player2.setRound(result);
                player2RoundOutput.textContent = player2.getRound();
                player2RoundOutputMobile.textContent = player2.getRound();
                player2.flashWin(player2RoundOutput);
                player2.flashWin(player2RoundOutputMobile);
                playSound('sound/chun-li-yap.mp3', 0.1);
            }
        });
    }
    /*-----------  GARDER LE SCORE  -------------------*/

    for (holdBtn of holdBtnAll) {
        holdBtn.addEventListener('click', () => {
            /*--------  joueur 1 hold -----------*/
            if (player1.inGame) {
                playSound('sound/ryuken-kick.mp3', 0.1);
                player1.setGlobal(player1.getRound());
                player1.setRound0();
                player1GlobalOutput.textContent = player1.getGlobal();
                player1GlobalOutputMobile.textContent = player1.getGlobal();
                player1RoundOutput.textContent = player1.getRound();
                player1RoundOutputMobile.textContent = player1.getRound();
                player1.flashWin(player1GlobalOutput);
                player1.flashWin(player1GlobalOutputMobile);
                nextPlayer();
                /*-----------  VICTOIRE player 1 -------------------*/
                if (player1.getGlobal() >= scoreToWinInput) {
                    setTimeout(() => {
                        playSound('sound/ryuken-shoryuken.mp3', 0.1);
                    }, 500);
                    playSound('sound/Street Fighter II Music - Guile - HQ.mp3', 0.5);
                    player2.unactivePlayer();
                    player1.activePlayer();
                    flash();
                    videoBloc1.style.display = 'flex';
                    videoPlayer1.play();
                }
            } else {
                /*--------  joueur 2 hold -----------*/
                playSound('sound/chun-li-laugh.mp3', 0.1);
                player2.setGlobal(player2.getRound());
                player2.setRound0();
                player2GlobalOutput.textContent = player2.getGlobal();
                player2GlobalOutputMobile.textContent = player2.getGlobal();
                player2RoundOutput.textContent = player2.getRound();
                player2RoundOutputMobile.textContent = player2.getRound();
                player2.flashWin(player2GlobalOutput);
                player2.flashWin(player2GlobalOutputMobile);
                nextPlayer();
                /*-----------  VICTOIRE player 2 -------------------*/
                if (player2.getGlobal() >= scoreToWinInput) {
                    setTimeout(() => {
                        playSound('sound/chun-li-kick.mp3', 0.1);
                    }, 500);
                    playSound('sound/Street Fighter II Music - Guile - HQ.mp3', 0.5);
                    player1.unactivePlayer();
                    player2.activePlayer();
                    flash();
                    videoBloc2.style.display = 'flex';
                    videoPlayer2.play();
                }
            }
        });
    }
});
