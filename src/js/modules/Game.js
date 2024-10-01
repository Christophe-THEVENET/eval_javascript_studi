import { Sound } from './Sound.js';
import { Player } from './Player.js';

class Game {
    constructor() {
        window.app.gameStarted = true;
        // inputs form new game
        this.player1Name = document.querySelector('#player1-input').value;
        this.player2Name = document.querySelector('#player2-input').value;
        this.scoreToWin = document.querySelector('#win-score-input').value;
        // ------ elements ------
        this.elTitleText = document.querySelector('#title');
        // dice & command
        this.elDiceRollBtn = document.querySelector('.btn-roll-js');
        this.elDice = document.querySelector('.dice-all');
        this.elHoldScoreBtn = document.querySelector('.btn-hold-js');
        // players render
        this.elScoreToWinText = document.querySelector('#win-score-output');
        this.elPlayer1NameText = document.querySelector('#player1-output');
        this.elPlayer1ProgressBar = document.querySelector('.progress-bar-p1');
        this.elPlayer1Img = document.querySelector('#player1-img');
        this.elPlayer2NameText = document.querySelector('#player2-output');
        this.elPlayer2Img = document.querySelector('#player2-img');
        this.elPlayer2ProgressBar = document.querySelector('.progress-bar-p2');
        // scores
        this.elPlayer1RoundText = document.querySelector('#player1-round');
        this.elPlayer2RoundText = document.querySelector('#player2-round');
        this.elPlayer1GlobalText = document.querySelector('#player1-global');
        this.elPlayer2GlobalText = document.querySelector('#player2-global');
        // players
        this.player1 = new Player(this.player1Name, this.elPlayer1Img);
        this.player2 = new Player(this.player2Name, this.elPlayer2Img);
        // victory clip
        this.elVideoPlayer1Section = document.getElementById('videoBloc1');
        this.elVideoPlayer1 = document.getElementById('videoPlayer1');
        this.elVideoPlayer2Section = document.getElementById('videoBloc2');
        this.elVideoPlayer2 = document.getElementById('videoPlayer2');

        this.sound = new Sound();
        this.init();
    }

    init() {
        // // effect attracted user roll dice
        this.elDiceRollBtn.classList.add('btn-insist');
        // active player 1
        this.player1.activePlayer();
        this.playSoundAtStartGame();
        this.showGameParams();
        this.resetScores();
        this.watchDiceRoll();
        this.watchHoldScore();
    }

    playSoundAtStartGame() {
        this.sound.playSound('intro.mp3', 0.2);
        /*decalage du son round*/
        setTimeout(() => {
            this.sound.playSound('round.mp3', 0.2);
        }, 500);
        /*decalage du son fight*/
        setTimeout(() => {
            this.sound.playSound('fight.mp3', 0.2);
        }, 1500);
    }

    showGameParams() {
        this.elScoreToWinText.textContent = `score a atteindre (${this.scoreToWin})`;
        this.player1.showPlayerName(this.elPlayer1NameText);
        this.player2.showPlayerName(this.elPlayer2NameText);
    }

    resetScores() {
        this.player1.setRound0();
        this.player2.setRound0();
        this.player1.setGlobal0();
        this.player2.setGlobal0();
        this.elPlayer1RoundText.textContent = this.player1.getRound();
        this.elPlayer2RoundText.textContent = this.player2.getRound();
        this.elPlayer1GlobalText.textContent = this.player1.getGlobal();
        this.elPlayer2GlobalText.textContent = this.player2.getGlobal();
    }

    changePlayer() {
        if (this.player1.inGame === true) {
            this.player1.inGame = false;
            this.player2.inGame = true;
            this.player1.unactivePlayer();
            this.player2.activePlayer();
            this.sound.playSound('switch1.wav', 0.2);
        } else {
            this.player1.inGame = true;
            this.player2.inGame = false;
            this.player1.activePlayer();
            this.player2.unactivePlayer();
            this.sound.playSound('switch1.wav', 0.2);
        }
    }

    watchDiceRoll() {
        if (window.app.gameStarted) {
            this.elDiceRollBtn.addEventListener('click', () => {
                /**supprime le guide boutons lancer */
                this.elDiceRollBtn.classList.remove('btn-insist');
                /* lancer du dé*/
                let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
                this.elDice.dataset.side = result;
                this.elDice.classList.toggle('reRoll');
                /* son lancer du dé*/
                this.sound.playSound('dice.mp3', 0.7);
                /*  player 1 fait 1*/
                if (this.player1.inGame && result === 1) {
                    this.player1.setRound0();
                    this.elPlayer1RoundText.textContent = this.player1.getRound();
                    this.player1.flashLose(this.elPlayer1RoundText);
                    this.player1.flashLose(this.elTitleText);
                    this.changePlayer();
                    this.sound.playSound('dieguy.wav', 0.2);
                    this.sound.playSound('dice-one.wav', 0.2);
                    /*  player 1 fait !=1*/
                } else if (this.player1.inGame && result !== 1) {
                    this.player1.setRound(result);
                    this.elPlayer1RoundText.textContent = this.player1.getRound();
                    this.player1.flashWin(this.elPlayer1RoundText);
                    this.sound.playSound('ryuken-hadooken.mp3', 0.1);
                    /*  player 2 fait 1*/
                } else if (this.player2.inGame && result === 1) {
                    this.player2.setRound0();
                    this.elPlayer2RoundText.textContent = this.player2.getRound();
                    this.player2.flashLose(this.elPlayer2RoundText);
                    this.player2.flashLose(this.elTitleText);
                    this.changePlayer();
                    this.sound.playSound('diegirl.wav', 0.2);
                    this.sound.playSound('dice-one.wav', 0.2);

                    /*  player 2 fait !=1*/
                } else if (this.player2.inGame && result !== 1) {
                    this.player2.setRound(result);
                    this.elPlayer2RoundText.textContent = this.player2.getRound();
                    this.player2.flashWin(this.elPlayer2RoundText);
                    this.sound.playSound('chun-li-yap.mp3', 0.1);
                }
            });
        }
    }

    watchHoldScore() {
        if (window.app.gameStarted) {
            this.elHoldScoreBtn.addEventListener('click', () => {
                /*--------  joueur 1 hold -----------*/
                if (this.player1.inGame) {
                    this.sound.playSound('ryuken-kick.mp3', 0.1);
                    this.player1.setGlobal(this.player1.getRound());
                    this.player1.setRound0();
                    this.elPlayer1GlobalText.textContent = this.player1.getGlobal();
                    this.elPlayer1RoundText.textContent = this.player1.getRound();
                    this.player1.flashWin(this.elPlayer1GlobalText);
                    this.player1.progressBar(this.player1.getGlobal(), this.elPlayer1ProgressBar);
                    this.changePlayer();
                    /*-----------  VICTOIRE player 1 -------------------*/
                    if (this.player1.getGlobal() >= this.scoreToWin) {
                        window.app.gameStarted = false;
                        setTimeout(() => {
                            this.sound.playSound('ryuken-shoryuken.mp3', 0.1);
                        }, 500);
                        this.sound.playSound('StreetFighterMusic-Guile.mp3', 0.5);
                        this.player2.unactivePlayer();
                        this.player1.activePlayer();
                        this.player1.flash();
                        this.elVideoPlayer1Section.style.display = 'flex';
                        this.elVideoPlayer1.play();
                        this.elTitleText.textContent = `${this.player1Name}  bravo!`;
                    }
                } else {
                    /*--------  joueur 2 hold -----------*/
                    this.sound.playSound('chun-li-laugh.mp3', 0.1);
                    this.player2.setGlobal(this.player2.getRound());
                    this.player2.setRound0();
                    this.elPlayer2GlobalText.textContent = this.player2.getGlobal();

                    this.elPlayer2RoundText.textContent = this.player2.getRound();

                    this.player2.flashWin(this.elPlayer2GlobalText);

                    this.player2.progressBar(this.player2.getGlobal(), this.elPlayer2ProgressBar);

                    this.changePlayer();
                    /*-----------  VICTOIRE player 2 -------------------*/
                    if (this.player2.getGlobal() >= this.scoreToWin) {
                        window.app.gameStarted = false;
                        setTimeout(() => {
                            this.sound.playSound('chun-li-kick.mp3', 0.1);
                        }, 500);
                        this.sound.playSound('StreetFighterMusic-Guile.mp3', 0.5);
                        this.player1.unactivePlayer();
                        this.player2.activePlayer();
                        this.player2.flash();
                        this.elVideoPlayer2Section.style.display = 'flex';
                        this.elVideoPlayer2.play();
                        this.elTitleText.textContent = `${this.player2Name}  bravo!`;
                    }
                }
            });
        }
    }
}

export { Game };
