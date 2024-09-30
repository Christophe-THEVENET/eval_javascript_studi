import { Sound } from './Sound.js';

class Game {
    constructor() {
        
        // inputs form new game
        this.player1Name = document.querySelector('#player1-input').value;
        this.player2Name = document.querySelector('#player2-input').value;
        this.scoreToWin = document.querySelector('#win-score-input').value;
        // elements
        this.elRollBtn = document.querySelector('.btn-roll-js');
        this.elScoreToWinText = document.querySelector('#win-score-output');
        this.elPlayer1Img = document.querySelector('#player1-img');
        this.elPlayer2Img = document.querySelector('#player2-img');

       /*  this.player1 = new Player(this.player1Name, this.elPlayer1Img);
        this.player2 = new Player(this.player2Name, this.elPlayer2Img); */

        this.sound = new Sound(); 
        this.init();
    }

    init() {
       
        // // effect attracted user roll dice
        this.elRollBtn.classList.add('btn-insist');
        this.playSoundAtStartGame();
        this.showGameParams();

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

        this.elScoreToWinText.textContent = `score a atteindre (${this.scoreToWin})`;;

    }


    /*  newGameButtonGuideEffect() {
        this.elOpenNewGameModalBtn.classList.add('btn-insist');
    }

    watchRulesModal() {
        this.elOpenRulesModalBtn.addEventListener('click', () => {
            this.sound.playSound('select.wav');
            this.elRulesModal.style.display = 'flex';
        });

        this.elCloseRulesModalBtn.addEventListener('click', () => {
            this.elRulesModal.style.display = 'none';
        });
    }

    watchNewGameModal() {
        this.elOpenNewGameModalBtn.addEventListener('click', () => {
            this.sound.playSound('new-game.wav', 0.8);
            this.elNewGameMModal.style.display = 'flex';
        });
    } */
}

export { Game };
