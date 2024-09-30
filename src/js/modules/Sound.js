class Sound {
    constructor(soundOn = true) {
        this.elSoundBtn = document.querySelector('.btn-sound');
        this.soundOn = soundOn;

        this.init();
    }

    init() {
        this.watchChoiceSoundOn();
    }
    // surveille le choix du son
    watchChoiceSoundOn() {
        this.elSoundBtn.addEventListener('click', () => {
            if (this.soundOn === true) {
                this.soundOn = false;
                this.elSoundBtn.textContent = 'son (off)';
            } else {
                this.soundOn = true;
                this.elSoundBtn.textContent = 'son (on)';
            }
            return;
        });
    }

    // joue un son
    playSound(soundName, volume = 0.3) {
        let sound = new Audio(`src/sound/${soundName}`);

        if (this.soundOn === true) {
            sound.play();
            sound.volume = volume;
        } else {
            sound.pause();
        }
    }
}

export { Sound };
