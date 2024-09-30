import { Sound } from './Sound.js';

class Modal {
    constructor() {
        // rules modal
        this.elRulesModal = document.querySelector('.rules-modal');
        this.elOpenRulesModalBtn = document.querySelector('.btn-rules-js');
        this.elCloseRulesModalBtn = document.querySelector('#btn-close-rules-modal');
        // new game modal
        this.elNewGameMModal = document.querySelector('.new-game-modal');
        this.elOpenNewGameModalBtn = document.querySelector('.btn-new-game');

        this.sound = new Sound();
        this.init();
    }

    init() {
        this.newGameButtonGuideEffect();
        this.watchRulesModal();
        this.watchNewGameModal();
    }

    newGameButtonGuideEffect() {
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
    }
}

export { Modal };
