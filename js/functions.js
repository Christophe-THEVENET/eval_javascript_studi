/*-----  JOUER UN SON AVEC REGLAGE VOLUME --------*/
const playSound = (src, vol) => {
    let sound = new Audio(src);
    sound.play();
    sound.volume = vol;
};

/*-----  CLASSE PLAYER ROUND ET GLOBAL--------*/

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
    /*annule points*/
    setRound0 = () => (this.round = 0);
    /*annule total*/
    setGlobal0 = () => (this.global = 0);
    /*afficher nom des joueurs*/
    showPlayerName = (playerNameDesktop, playerNameMobile) => {
        playerNameDesktop.textContent = this.name;
        playerNameMobile.textContent = this.name;
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
}

/**anim titre flash */
const flash = () => {
    setInterval(() => {
        title.classList.add('flash-win');
        setTimeout(() => {
            title.classList.remove('flash-win');
        }, 400);
    }, 400);
};
