import {
    /*  btnRules,
    btnNewGame,
    btnRoll,
    btnCloseRules, */
    /* btnStartNewGame, */
    /*  rulesModal,
    newGameModal, */
    /* scoreToWinOutput, */
    player1Img,
    player2Img,
    player1NameOutput,
    player2NameOutput,
    player1RoundOutput,
    player2RoundOutput,
    player1GlobalOutput,
    player2GlobalOutput,
    btnHold,
    dice,
    player1ProgressBar,
    player2ProgressBar
} from './variables.js';
/* import { Sound } from './modules/Sound.js'; */
import { Modal } from './modules/Modal.js';
import { Game } from './modules/Game.js';


import { Player } from './functions.js';

window.app = {
    sound:true
}

new Modal();

/*----------------- LANCER LE JEU -------------------*/

// bouton jouer ds modale
let elStartNewGameBtn = document.querySelector('#btn-close-ng-modal');
elStartNewGameBtn.addEventListener('click', () => {
    new Game();
    /*supprime le guide bouton nouvelle parties */
   /*  elStartNewGameBtn.classList.remove('btn-insist'); */

    /*ajoute le guide bouton lancer */
   /*  btnRoll.classList.add('btn-insist'); */
    /*ferme modale nouvelle partie */

   
    /* newGameModal.style.display = 'none'; */
   /*  playSound('src/sound/intro.mp3', 0.2); */
    /*decalage du son round*/
/*     setTimeout(() => {
        playSound('src/sound/round.mp3', 0.2);
    }, 500); */
    /*decalage du son fight*/
   /*  setTimeout(() => {
        playSound('src/sound/fight.mp3', 0.2);
    }, 1500); */


     
    /*recupere les noms des joueurs*/
   /*  let player1NameInput = document.querySelector('#player1-input').value;
    let player2NameInput = document.querySelector('#player2-input').value; */
    
    /*afficher score a atteindre*/
   /*  let scoreToWinInput = document.querySelector('#win-score-input').value;
    scoreToWinOutput.textContent = `score a atteindre (${scoreToWinInput})`; */

    return;

    /*instance des nouveaux joueurs*/
    let player1 = new Player(player1NameInput, player1Img);
    let player2 = new Player(player2NameInput, player2Img);

    /*affiche le nom des joueurs*/
    player1.showPlayerName(player1NameOutput);
    player2.showPlayerName(player2NameOutput);

    /*reset des scores*/
    player1.setRound0();
    player2.setRound0();
    player1.setGlobal0();
    player2.setGlobal0();
    player1RoundOutput.textContent = player1.getRound();
    player2RoundOutput.textContent = player2.getRound();
    player1GlobalOutput.textContent = player1.getGlobal();
    player2GlobalOutput.textContent = player2.getGlobal();

    /**active le joueur 1 */
    player1.activePlayer();

    /**changement de joueur */
    const nextPlayer = () => {
        if (player1.inGame === true) {
            player1.inGame = false;
            player2.inGame = true;
            player1.unactivePlayer();
            player2.activePlayer();
            playSound('src/sound/switch1.wav', 0.2);
        } else {
            player1.inGame = true;
            player2.inGame = false;
            player1.activePlayer();
            player2.unactivePlayer();
            playSound('src/sound/switch1.wav', 0.2);
        }
    };

    /*-----------  LANCER LE DE  -------------------*/
    btnRoll.addEventListener('click', () => {
        /**supprime le guide boutons lancer */
        btnRoll.classList.remove('btn-insist');
        /* lancer du dé*/
        let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        dice.dataset.side = result;
        dice.classList.toggle('reRoll');
        /* son lancer du dé*/
        playSound('src/sound/dice.mp3', 0.7);
        /*  player 1 fait 1*/
        if (player1.inGame && result === 1) {
            player1.setRound0();
            player1RoundOutput.textContent = player1.getRound();
            player1.flashLose(player1RoundOutput);
            player1.flashLose(title);
            nextPlayer();
            playSound('src/sound/dieguy.wav', 0.2);
            playSound('src/sound/dice-one.wav', 0.2);

            /*  player 1 fait !=1*/
        } else if (player1.inGame && result !== 1) {
            player1.setRound(result);
            player1RoundOutput.textContent = player1.getRound();
            player1.flashWin(player1RoundOutput);
            playSound('src/sound/ryuken-hadooken.mp3', 0.1);

            /*  player 2 fait 1*/
        } else if (player2.inGame && result === 1) {
            player2.setRound0();
            player2RoundOutput.textContent = player2.getRound();
            player2.flashLose(player2RoundOutput);
            player2.flashLose(title);
            nextPlayer();
            playSound('src/sound/diegirl.wav', 0.2);
            playSound('src/sound/dice-one.wav', 0.2);

            /*  player 2 fait !=1*/
        } else if (player2.inGame && result !== 1) {
            player2.setRound(result);
            player2RoundOutput.textContent = player2.getRound();
            player2.flashWin(player2RoundOutput);
            playSound('src/sound/chun-li-yap.mp3', 0.1);
        }
    });
    /*-----------  GARDER LE SCORE  -------------------*/

    btnHold.addEventListener('click', () => {
        /*--------  joueur 1 hold -----------*/
        if (player1.inGame) {
            playSound('src/sound/ryuken-kick.mp3', 0.1);
            player1.setGlobal(player1.getRound());
            player1.setRound0();
            player1GlobalOutput.textContent = player1.getGlobal();
            player1RoundOutput.textContent = player1.getRound();
            player1.flashWin(player1GlobalOutput);
            player1.progressBar(player1.getGlobal(), player1ProgressBar);
            nextPlayer();
            /*-----------  VICTOIRE player 1 -------------------*/
            if (player1.getGlobal() >= scoreToWinInput) {
                setTimeout(() => {
                    playSound('src/sound/ryuken-shoryuken.mp3', 0.1);
                }, 500);
                playSound('src/sound/Street Fighter II Music - Guile - HQ.mp3', 0.5);
                player2.unactivePlayer();
                player1.activePlayer();
                player1.flash();
                videoBloc1.style.display = 'flex';
                videoPlayer1.play();
                title.textContent = `${player1NameInput}  bravo!`;
            }
        } else {
            /*--------  joueur 2 hold -----------*/
            playSound('src/sound/chun-li-laugh.mp3', 0.1);
            player2.setGlobal(player2.getRound());
            player2.setRound0();
            player2GlobalOutput.textContent = player2.getGlobal();

            player2RoundOutput.textContent = player2.getRound();

            player2.flashWin(player2GlobalOutput);

            player2.progressBar(player2.getGlobal(), player2ProgressBar);

            nextPlayer();
            /*-----------  VICTOIRE player 2 -------------------*/
            if (player2.getGlobal() >= scoreToWinInput) {
                setTimeout(() => {
                    playSound('src/sound/chun-li-kick.mp3', 0.1);
                }, 500);
                playSound('src/sound/Street Fighter II Music - Guile - HQ.mp3', 0.5);
                player1.unactivePlayer();
                player2.activePlayer();
                player2.flash();
                videoBloc2.style.display = 'flex';
                videoPlayer2.play();
                title.textContent = `${player2NameInput}  bravo!`;
            }
        }
    });
});
