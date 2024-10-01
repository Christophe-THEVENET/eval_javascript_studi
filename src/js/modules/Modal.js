import { Sound } from './Sound.js';
import { Game } from './Game.js';

class Modal {
    constructor() {
        // rules modal
        this.elRulesModal = document.querySelector('.rules-modal');
        this.elOpenRulesModalBtn = document.querySelector('.btn-rules-js');
        this.elCloseRulesModalBtn = document.querySelector('#btn-close-rules-modal');
        this.elOverlayRules = document.querySelector('.mor-js');
        // new game modal
        this.elNewGameModal = document.querySelector('.new-game-modal');
        this.elOpenNewGameModalBtn = document.querySelector('.btn-new-game');
        this.elStartNewGameBtn = document.querySelector('#btn-close-ng-modal');
        this.elOverlayNewGame = document.querySelector('.mong-js');

        this.sound = new Sound();
        this.init();
    }

    init() {
        // effect attracted user new game
        this.elOpenNewGameModalBtn.classList.add('btn-insist');
        // watch modals
        this.watchRulesModal();
        this.watchNewGameModal();
    }

    watchRulesModal() {
        this.elOpenRulesModalBtn.addEventListener('click', () => {
            this.sound.playSound('select.wav');
            this.elRulesModal.classList.remove('hide');
            this.elRulesModal.classList.add('show');
            this.elOverlayRules.classList.add('show');
        });

        this.elCloseRulesModalBtn.addEventListener('click', () => {
            this.elRulesModal.classList.remove('show');
            this.elRulesModal.classList.add('hide');
            this.elOverlayRules.classList.remove('show');
        });
    }

    watchNewGameModal() {
        this.elOpenNewGameModalBtn.addEventListener('click', () => {
            if (window.app.gameStarted === false) {
                this.sound.playSound('new-game.wav', 0.8);
                this.elNewGameModal.classList.remove('hide');
                this.elNewGameModal.classList.add('show');
                this.elOverlayNewGame.classList.add('show');
            }
        });

        this.elStartNewGameBtn.addEventListener('click', () => {
            this.elNewGameModal.classList.remove('show');
            this.elNewGameModal.classList.add('hide');
            this.elOverlayNewGame.classList.remove('show');
            this.elOpenNewGameModalBtn.classList.remove('btn-insist');

            new Game();
            new Sound();
        });
    }
}

export { Modal };
