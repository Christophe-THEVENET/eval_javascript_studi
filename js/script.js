/*---------------------  HTML MODALE -----------------------*/
/*commandes modale régles*/
let rulesModal = document.querySelector('.rules-modal');
let btnRulesModal = document.querySelector('#btn-modal');
let btnRulesModalMobile = document.querySelector('#btn-modal-mobile');
let btnCloseModal = document.querySelector('#btn-close-rules-modal');
let newGameModal = document.querySelector('.new-game-modal');
let btnNewGame = document.querySelector('#btn-new-game');
let btnNewGameMobile = document.querySelector('#btn-modal-ng-mobile');
let btnStartNewGame = document.querySelector('#btn-close-ng-modal');

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

/*---------  HTML POINTS EN COURS / POINTS TOTAL OUTPUT----------------*/
/* desktop*/
let player1Round = document.querySelector('#player1-round');
let player2Round = document.querySelector('#player2-round');
/* mobile*/
let player1RoundMobile = document.querySelector('#player1-round-mobile');
let player2RoundMobile = document.querySelector('#player2-round-mobile');
/* desktop*/
let player1Global = document.querySelector('#player1-global');
let player2Global = document.querySelector('#player2-global');
/* mobile*/
let player1GlobalMobile = document.querySelector('#player1-global-mobile');
let player2GlobalMobile = document.querySelector('#player2-global-mobile');

/*  let player1NameOutputMobile = document.querySelector('#player1-output-mobile');
let player2NameOutputMobile = document.querySelector('#player2-output-mobile');
let scoreToWinOutputMobile = document.querySelector('#win-score-output-mobile');  */

/*---------------------  GESTION DES MODALES -----------------------*/

/*ouvrir la modale rules*/
btnRulesModal.addEventListener('click', () => {
    playSound('sound/select.wav', 0.3);
    rulesModal.style.display = 'flex';
});
/*ouvrir la modale rules mobile*/
btnRulesModalMobile.addEventListener('click', () => {
    playSound('sound/select.wav', 0.3);
    rulesModal.style.display = 'flex';
});

/*fermer la modale rules*/
btnCloseModal.addEventListener('click', () => {
    rulesModal.style.display = 'none';
});

/*ouvrir la modale newGame*/
btnNewGame.addEventListener('click', () => {
    newGameModal.style.display = 'flex';
    playSound('sound/new-game.wav', 0.8);
});

/*ouvrir la modale newGame mobile*/
btnNewGameMobile.addEventListener('click', () => {
    newGameModal.style.display = 'flex';
    playSound('sound/new-game.wav', 0.8);
});

/*-------------------- LANCER LE JEU ------------------------*/

btnStartNewGame.addEventListener('click', () => {
    newGameModal.style.display = 'none';
    playSound('sound/intro.mp3', 0.2);
    /*decalage du son round*/
    setTimeout(() => {
        playSound('sound/round.mp3', 0.2);
    }, 500);
    /*decalage du son fight*/
    setTimeout(() => {
        playSound('sound/fight.mp3', 0.2);
    }, 1500);

    /*afficher nom des joueurs et score a atteindre*/
    /*desktop*/
    player1NameOutput.textContent = player1NameInput.value;
    player2NameOutput.textContent = player2NameInput.value;
    scoreToWinOutput.textContent = `total (${scoreToWinInput.value}pts)`;
    /*mobile*/
    player1NameOutputMobile.textContent = player1NameInput.value;
    player2NameOutputMobile.textContent = player2NameInput.value;
    scoreToWinOutputMobile.textContent = `total (${scoreToWinInput.value}pts)`;
});

player1NameOutput.textContent = player1.getName();
player2NameOutput.textContent = player2.getName();

player1Round.textContent = player1.getRound();
player1RoundMobile.textContent = player1.getRound();
player2Round.textContent = player2.getRound();
player2RoundMobile.textContent = player2.getRound();

player1Global.textContent = player1.getGlobal();
player1GlobalMobile.textContent = player1.getGlobal();
player2Global.textContent = player2.getGlobal();
player2GlobalMobile.textContent = player2.getGlobal();
