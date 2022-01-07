/*-----  toggle bouton son (on/off)--------*/
let soundOn = true;

for (let btnSound of btnSoundAll) {
    btnSound.addEventListener('click', () => {
        if (soundOn === true) {
            soundOn = false;
            btnSound.textContent = 'son (off)';
        } else {
            soundOn = true;
            btnSound.textContent = 'son (on)';
        }
        return;
    });
}
/*-----  JOUER UN SON AVEC REGLAGE VOLUME --------*/

const playSound = (src, vol) => {
    let sound = new Audio(src);

    if (soundOn === true) {
        sound.play();
        sound.volume = vol;
    } else {
        sound.pause();
    }
};

/*-----  CLASSE PLAYER ROUND ET GLOBAL--------*/

class Player {
    constructor(name, img, imgMobile) {
        this.name = name;
        this.round = 0;
        this.global = 0;
        this.img = img;
        this.imgMobile = imgMobile;
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
    showPlayerName = (playerNameDesktop, playerNameMobile) => {
        playerNameDesktop.textContent = this.name;
        playerNameMobile.textContent = this.name;
    };
    /*active le joueur*/
    activePlayer = () => {
        this.img.classList.add('img-active');
        this.imgMobile.classList.add('img-active');
        this.inGame = true;
    };
    /*desactive le joueur*/
    unactivePlayer = () => {
        this.img.classList.remove('img-active');
        this.imgMobile.classList.remove('img-active');
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
            titleMobile.classList.add('flash-win');
            setTimeout(() => {
                title.classList.remove('flash-win');
                titleMobile.classList.remove('flash-win');
            }, 200);
        }, 600);
    };
    /**calcul et modif progress bar */
    progressBar = (getGlobal, progressBar) => {
        /**pour les 2 barres (mobile et bureau) du joueur */
        for (let bar of progressBar) {
            /**transforme score to win a 100%  (regle de 3)*/
            let scoreToWin = document.querySelector('#win-score-input').value;
            let factor = 100 / scoreToWin;
            let progress = 0;
            progress += factor * getGlobal;
            /**applique une largeur  qui corespond au score Global*/
            bar.style.width = `${progress}%`;
        }
    };
}
