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

    getRound = () => this.round;
    getGolbal = () => this.global;

    setRound = (round) => (this.round = round);
    setGlobal = (global) => (this.global = global);
}

