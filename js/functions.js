/*-----  JOUER UN SON AVEC REGLAGE VOLUME --------*/
const playSound = (src, vol) => {
    let sound = new Audio(src);
    sound.play();
    sound.volume = vol;
};




/*-----  CLASSE PLAYER ROUND ET GLOBAL--------*/

class Player {
    constructor(name, round, global, img) {
        this.name = name;
        this.round = round;
        this.global = global;
        this.img = img;
        this.NumberOne = false;
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
    /*afficher nom des joueurs*/
    showPlayerName = (playerNameDesktop, playerNameMobile) => {
        playerNameDesktop.textContent = this.name;
        playerNameMobile.textContent = this.name;
    };
    /*active image du joueur*/
    activeImgPlayer = () => {
        this.img.classList.add = 'img-active';
        console.log(this.img);

    };
}

/*----- SOMME DES RESULTATS DU DE ET O POINTS SI 1 --------*/
const someRoundRollDice = (player, playerRoundOutput, number) => {
    /*si le de fait 1*/
    if (number === 1) {
        player.setRound0();
        player.NumberOne = true;
        playerRoundOutput.textContent = player.getRound();
        playerRoundOutput.classList.add('flash-lose');
        /*supprime le flash anim au bout d 1s*/
        setTimeout(() => {
            playerRoundOutput.classList.remove('flash-lose');
        }, 1000);
    } else {
        player.setRound(number);
        console.log(player.NumberOne);
        player.NumberOne = false;
        console.log(player.getRound());
        playerRoundOutput.textContent = player.getRound();
        playerRoundOutput.classList.add('flash-win');
        /*supprime le flash anim au bout d 1s*/
        setTimeout(() => {
            playerRoundOutput.classList.remove('flash-win');
        }, 1000);
    }
};
