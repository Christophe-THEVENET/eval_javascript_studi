/*-------------------  HTML MODALE -----------------------*/
/* let rulesModal = document.querySelector('.rules-modal');
let newGameModal = document.querySelector('.new-game-modal'); */

/*-------------------  HTML BOUTONS -----------------------*/
/*--------parametres---------*/
/* let btnRules = document.querySelector('.btn-rules-js');
let btnCloseRules = document.querySelector('#btn-close-rules-modal');
let btnNewGame = document.querySelector('.btn-new-game'); */
let btnStartNewGame = document.querySelector('#btn-close-ng-modal');
/* let btnSound = document.querySelector('.btn-sound'); */
/*--------action--------*/
let btnRoll = document.querySelector('.btn-roll-js');
let btnHold = document.querySelector('.btn-hold-js');

/*----------------  HTML PLAYERS-SCORE-IMG-----------------*/
/*--------------------round----------------*/
let player1RoundOutput = document.querySelector('#player1-round');
let player2RoundOutput = document.querySelector('#player2-round');

/*-------------------global---------------*/
let player1GlobalOutput = document.querySelector('#player1-global');
let player2GlobalOutput = document.querySelector('#player2-global');

/*-------------------img-----------------*/
let player1Img = document.querySelector('#player1-img');
let player2Img = document.querySelector('#player2-img');

/*------------------progress bar ----------------*/
let player1ProgressBar = document.querySelector('.progress-bar-p1');
let player2ProgressBar = document.querySelector('.progress-bar-p2');

/*--------  HTML NOMS JOUEURS / SCORE A ATTEINDRE OUTPUT--------------*/
/* desktop*/
let player1NameOutput = document.querySelector('#player1-output');
let player2NameOutput = document.querySelector('#player2-output');
let scoreToWinOutput = document.querySelector('#win-score-output');

/*titre*/
let title = document.querySelector('#title');
/*dé*/
let dice = document.querySelector('.dice-all');
/**video */
let videoBloc1 = document.getElementById('videoBloc1');
let videoPlayer1 = document.getElementById('videoPlayer1');
let videoBloc2 = document.getElementById('videoBloc2');
let videoPlayer2 = document.getElementById('videoPlayer2');

export {
   /*  rulesModal,
    newGameModal,
    btnRules,
    btnCloseRules, */
    /* btnSound, */
    /* btnNewGame, */
    btnStartNewGame,
    btnRoll,
    btnHold,
    player1RoundOutput,
    player2RoundOutput,
    player1GlobalOutput,
    player2GlobalOutput,
    player1Img,
    player2Img,
    player1ProgressBar,
    player2ProgressBar,
    player1NameOutput,
    player2NameOutput,
    scoreToWinOutput,
    title,
    dice,
    videoBloc1,
    videoPlayer1,
    videoBloc2,
    videoPlayer2
};
