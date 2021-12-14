/*jouer un son*/ 
const playSound = (src) => {
    let sound = new Audio(src);
    sound.play();
};
