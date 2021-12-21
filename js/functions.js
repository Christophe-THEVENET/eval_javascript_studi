/*jouer un son*/
const playSound = (src, vol) => {
    let sound = new Audio(src);
    sound.play();
    sound.volume = vol;
};

class Player {
    constructor(round, global) {
        this.round = round;
        this.global = global;
    }
    /*recuperer points*/
    getRound = () => this.round;
    /*recuperer total*/
    getGolbal = () => this.global;
    /*recuperer nom joueur */
    getName = () => this.name;
    /*modifier points*/
    setRound = (round) => (this.round = round);
    /*modifier total*/
    setGlobal = (global) => (this.global = global);
}

