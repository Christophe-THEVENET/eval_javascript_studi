/*jouer un son*/
const playSound = (src, vol) => {
    let sound = new Audio(src);
    sound.play();
    sound.volume = vol;
};

class Player {
    constructor(round = 0, global = 0) {
        this.round = round;
        this.global = global;
    }

    /*recuperer points*/
    getRound = () => this.round;
    /*recuperer total*/
    getGlobal = () => this.global;
    /*modifier points*/
    setRound = (round) => (this.round += round);
    /*modifier total*/
    setGlobal = (global) => (this.global += global);

   
}

let player1 = new Player(4, 7);
let player2 = new Player(88, 743);
