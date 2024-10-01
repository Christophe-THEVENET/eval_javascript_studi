class Sound {
    constructor() {
        this.elSoundBtn = document.querySelector('.btn-sound');
        

        this.init();
    }

    init() {
        this.watchChoiceSoundOn();
    }
    // surveille le choix du son
    watchChoiceSoundOn() {
        this.elSoundBtn.addEventListener('click', () => {
            if (window.app.sound === true) {
                window.app.sound = false;
                this.elSoundBtn.textContent = 'son (off)';
            } else {
                window.app.sound = true;
                this.elSoundBtn.textContent = 'son (on)';
            }
            
        });
    }

    // joue son
    playSound(soundName, volume = 0.3) {
        let sound = new Audio(`./public/sound/${soundName}`);

        if (window.app.sound === true) {
            sound.play();
            sound.volume = volume;
        } else {
            sound.pause();
        }
    }
}

export { Sound };
