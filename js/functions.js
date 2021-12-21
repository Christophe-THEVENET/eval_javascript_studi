/*jouer un son*/
const playSound = (src, vol) => {
    let sound = new Audio(src);
    sound.play();
    sound.volume = vol;
};

class Player {
    constructor(name, round, global) {
        this.name = name;
        this.round = round;
        this.global = global;
    }

    /*recuperer nom joueur */
    getName = () => this.name;
    /*recuperer points*/
    getRound = () => this.round;
    /*recuperer total*/
    getGlobal = () => this.global;
    /*modifier nom joueur */
    setName = (name) => (this.name = name);
    /*modifier points*/
    setRound = (round) => (this.round = round);
    /*modifier total*/
    setGlobal = (global) => (this.global = global);

    addRound = (number) => (this.round += number);
}

let player1 = new Player(player1NameInput, 6, 89);
let player2 = new Player(player2NameInput, 12, 45);
