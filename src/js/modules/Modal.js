import { Sound } from './Sound.js';

class Modal {
    constructor() {
        // rules modal
        this.elRulesModal = document.querySelector('.rules-modal');
        this.elOpenRulesModalBtn = document.querySelector('.btn-rules-js');
        this.elCloseRulesModalBtn = document.querySelector('#btn-close-rules-modal');
        // new game modal
        this.elNewGameModal = document.querySelector('.new-game-modal');
        this.elOpenNewGameModalBtn = document.querySelector('.btn-new-game');
        this.elStartNewGameBtn = document.querySelector('#btn-close-ng-modal');

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
            this.elRulesModal.style.display = 'flex';
        });

        this.elCloseRulesModalBtn.addEventListener('click', () => {
            this.elRulesModal.style.display = 'none';
        });
    }

    watchNewGameModal() {
        this.elOpenNewGameModalBtn.addEventListener('click', () => {
            this.sound.playSound('new-game.wav', 0.8);
            this.elNewGameModal.style.display = 'flex';
        });

         this.elStartNewGameBtn.addEventListener('click', () => {
             this.elNewGameModal.style.display = 'none';
             this.elOpenNewGameModalBtn.classList.remove('btn-insist');
         });
    }
}

export { Modal };
