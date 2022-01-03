/*-----  JOUER UN SON AVEC REGLAGE VOLUME --------*/
const playSound = (src, vol) => {
    let sound = new Audio(src);
    sound.play();
    sound.volume = vol;
};

/*-----  CLASSE PLAYER ROUND ET GLOBAL--------*/

class Player {
    constructor(name, round, global) {
        this.name = name;
        this.round = round;
        this.global = global;
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

    /*afficher nom des joueurs*/
    showPlayerName = (playerNameDesktop, playerNameMobile) => {
        playerNameDesktop.textContent = this.name;
        playerNameMobile.textContent = this.name;
    };
}

/*-----  ANIME L IMAGE DU JOUEUR ACTIF --------*/
const animImg = (playerImg, playerImgMobile) => {
    playerImg.classList.add('img-active');
    playerImgMobile.classList.add('img-active');
};

/*----- DESANIME L IMAGE DU JOUEUR--------*/
const unanimImg = (playerImg, playerImgMobile) => {
    playerImg.classList.remove('img-active');
    playerImgMobile.classList.remove('img-active');
};
