/*-----  JOUER UN SON AVEC REGLAGE VOLUME --------*/
const playSound = (src, vol) => {
    let sound = new Audio(src);
    sound.play();
    sound.volume = vol;
};
/*-----  CLASSE PLAYER ROUND ET GLOBAL--------*/

class Player {
    constructor(round, global) {
        this.round = round;
        this.global = global;
    }
    /*recuperer points*/
    getRound = () => this.round;
    /*recuperer total*/
    getGlobal = () => this.global;
    /*modifier points*/
    setRound = (num) => (this.round += num);
    /*modifier total*/
    setGlobal = (num2) => (this.global += num2);
}

let player1 = new Player(0, 0);
let player2 = new Player(0, 0);

/*-----  RECUPERE ET AFFICHE NOM DES JOUEURS ET SCORE A ATTEINDRE --------*/

const showNamePlayer = () => {
    /*---------  HTML NOMS JOUEURS / SCORE A ATTEINDRE INPUT -----------------*/
    let player1NameInput = document.querySelector('#player1-input');
    let player2NameInput = document.querySelector('#player2-input');
    let scoreToWinInput = document.querySelector('#win-score-input');
    /*---------  HTML NOMS JOUEURS / SCORE A ATTEINDRE OUTPUT----------------*/
    /* desktop*/
    let player1NameOutput = document.querySelector('#player1-output');
    let player2NameOutput = document.querySelector('#player2-output');
    let scoreToWinOutput = document.querySelector('#win-score-output');
    /* mobile*/
    let player1NameOutputMobile = document.querySelector('#player1-output-mobile');
    let player2NameOutputMobile = document.querySelector('#player2-output-mobile');
    let scoreToWinOutputMobile = document.querySelector('#win-score-output-mobile');
    /*afficher nom des joueurs et score a atteindre*/
    /*desktop*/
    player1NameOutput.textContent = player1NameInput.value;
    player2NameOutput.textContent = player2NameInput.value;
    scoreToWinOutput.textContent = `total (${scoreToWinInput.value})`;
    /*mobile*/
    player1NameOutputMobile.textContent = player1NameInput.value;
    player2NameOutputMobile.textContent = player2NameInput.value;
    scoreToWinOutputMobile.textContent = `total (${scoreToWinInput.value}`;
};
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

/*-----  JOUEUR 1 DEMARRE LA PARTIE--------*/

