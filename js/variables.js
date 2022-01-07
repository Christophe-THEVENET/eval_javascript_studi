/*-------------------  HTML MODALE -----------------------*/
let rulesModal = document.querySelector('.rules-modal');
let newGameModal = document.querySelector('.new-game-modal');

/*-------------------  HTML BOUTONS -----------------------*/
let btnRulesAll = document.querySelectorAll('.btn-rules-js');
let btnCloseRules = document.querySelector('#btn-close-rules-modal');
let btnNewGameAll = document.querySelectorAll('.btn-new-game');
let btnStartNewGame = document.querySelector('#btn-close-ng-modal');
let btnSoundAll = document.getElementsByClassName('btn-sound');
let btnSoundDesktop = document.querySelector('#btn-sound-desktop');

let rollBtnAll = document.getElementsByClassName('btn-roll-js');
let holdBtnAll = document.getElementsByClassName('btn-hold-js');
let holdBtnMobile = document.getElementById('hold-mobile');

/*----------------  HTML PLAYERS-SCORE-IMG-----------------*/
/*--------------------round----------------*/
let player1RoundOutput = document.querySelector('#player1-round');
let player2RoundOutput = document.querySelector('#player2-round');
let player1RoundOutputMobile = document.querySelector('#player1-round-mobile');
let player2RoundOutputMobile = document.querySelector('#player2-round-mobile');
/*-------------------global---------------*/
let player1GlobalOutput = document.querySelector('#player1-global');
let player2GlobalOutput = document.querySelector('#player2-global');
let player1GlobalOutputMobile = document.querySelector('#player1-global-mobile');
let player2GlobalOutputMobile = document.querySelector('#player2-global-mobile');
/*-------------------img-----------------*/
let player1Img = document.querySelector('#player1-img');
let player2Img = document.querySelector('#player2-img');
let player1ImgMobile = document.querySelector('#player1-img-mobile');
let player2ImgMobile = document.querySelector('#player2-img-mobile');
/*------------------progress bar ----------------*/
let player1ProgressBar = document.querySelectorAll('.progress-bar-p1');
let player2ProgressBar = document.querySelectorAll('.progress-bar-p2');

/*--------  HTML NOMS JOUEURS / SCORE A ATTEINDRE OUTPUT--------------*/
/* desktop*/
let player1NameOutput = document.querySelector('#player1-output');
let player2NameOutput = document.querySelector('#player2-output');
let scoreToWinOutput = document.querySelector('#win-score-output');
/* mobile*/
let player1NameOutputMobile = document.querySelector('#player1-output-mobile');
let player2NameOutputMobile = document.querySelector('#player2-output-mobile');
let scoreToWinOutputMobile = document.querySelector('#win-score-output-mobile');
/*titre*/
let title = document.querySelector('#title');
let titleMobile = document.querySelector('#title-mobile');
/*dé*/
let diceAll = document.querySelectorAll('.dice-all');
/**video */
let videoBloc1 = document.getElementById('videoBloc1');
let videoPlayer1 = document.getElementById('videoPlayer1');
let videoBloc2 = document.getElementById('videoBloc2');
let videoPlayer2 = document.getElementById('videoPlayer2');
