/* import { btnSound } from './variables.js'; */

/*-----  toggle bouton son (on/off)--------*/
/* let soundOn = true; */

/* btnSound.addEventListener('click', () => {
    if (soundOn === true) {
        soundOn = false;
        btnSound.textContent = 'son (off)';
    } else {
        soundOn = true;
        btnSound.textContent = 'son (on)';
    }
    return;
}); */

/*-----  JOUER UN SON AVEC REGLAGE VOLUME --------*/

/* const playSound = (src, vol) => {
    let sound = new Audio(src);

    if (soundOn === true) {
        sound.play();
        sound.volume = vol;
    } else {
        sound.pause();
    }
};
 */
/*----------------  CLASSE PLAYER -----------------------*/

class Player {
    constructor(name, img) {
        this.name = name;
        this.round = 0;
        this.global = 0;
        this.img = img;
        this.inGame = false;
    }
    /*recuperer nom*/
    getName = () => this.name;
    /*recuperer points*/
    getRound = () => this.round;
    /*recuperer total*/
    getGlobal = () => this.global;
    /*modifier points*/
    setRound = (num) => (this.round += num);
    /*modifier total*/
    setGlobal = (num) => (this.global += num);
    /*reset points*/
    setRound0 = () => (this.round = 0);
    /*reset total*/
    setGlobal0 = () => (this.global = 0);
    /*afficher nom des joueurs*/
    showPlayerName = (playerName) => {
        playerName.textContent = this.name;
            };
    /*active le joueur*/
    activePlayer = () => {
        this.img.classList.add('img-active');
        this.inGame = true;
    };
    /*desactive le joueur*/
    unactivePlayer = () => {
        this.img.classList.remove('img-active');
        this.inGame = false;
    };
    /*anime le score win blanc*/
    flashWin = (output) => {
        output.classList.add('flash-win');
        /*supprime le flash anim au bout d 1s*/
        setTimeout(() => {
            output.classList.remove('flash-win');
        }, 1000);
    };
    /*anime le score lose rouge*/
    flashLose = (output) => {
        output.classList.add('flash-lose');
        /*supprime le flash anim au bout d 1s*/
        setTimeout(() => {
            output.classList.remove('flash-lose');
        }, 1000);
    };
    /**anim titre flash */
    flash = () => {
        setInterval(() => {
            title.classList.add('flash-win');
                        setTimeout(() => {
                title.classList.remove('flash-win');
            }, 200);
        }, 600);
    };
    /**calcul et modif progress bar */
    progressBar = (playerGlobalScore, playerProgressBar) => {
               /**transforme score to win a 100%  (regle de 3)*/
        let scoreToWin = document.querySelector('#win-score-input').value;
        let factor = 100 / scoreToWin;
        let progress = 0;
        progress += factor * playerGlobalScore;
        /**applique une largeur  qui corespond au score Global*/
        playerProgressBar.style.width = `${progress}%`;
    };
}

export { /* playSound, */ Player };
