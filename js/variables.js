/*-------------------  HTML MODALE -----------------------*/
let rulesModal = document.querySelector('.rules-modal');
let newGameModal = document.querySelector('.new-game-modal');


/*-------------------  HTML BOUTONS -----------------------*/
let btnRulesAll = document.querySelectorAll('.btn-rules-js');
let btnCloseRules = document.querySelector('#btn-close-rules-modal');
let btnNewGameAll = document.querySelectorAll('.btn-new-game');
let btnStartNewGame = document.querySelector('#btn-close-ng-modal');



/*--------------------  HTML PLAYERS--------------------*/

/* desktop*/
let player1RoundOutput = document.querySelector('#player1-round');
let player2RoundOutput = document.querySelector('#player2-round');
/* mobile*/
let player1RoundMobileOutput = document.querySelector('#player1-round-mobile');
let player2RoundMobileOutput = document.querySelector('#player2-round-mobile');
/* desktop*/
let player1GlobalOutput = document.querySelector('#player1-global');
let player2GlobalOutput = document.querySelector('#player2-global');
/* mobile*/
let player1GlobalMobileOutput = document.querySelector('#player1-global-mobile');
let player2GlobalMobileOutput = document.querySelector('#player2-global-mobile');
/* desktop*/
let player1Img = document.querySelector('#player1-img');
let player2Img = document.querySelector('#player2-img');
/* desktop*/
let player1ImgMobile = document.querySelector('#player1-img-mobile');
let player2ImgMobile = document.querySelector('#player2-img-mobile');

/*---------  HTML NOMS JOUEURS / SCORE A ATTEINDRE OUTPUT----------------*/
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


/*dé*/
let dice = document.getElementById('dice');
let diceMobile = document.getElementById('dice-mobile');
let rollBtnMobile = document.getElementById('roll-mobile');
let rollBtnAll = document.getElementsByClassName('btn-roll')
let holdBtn = document.getElementById('hold')
let holdBtnMobile = document.getElementById('hold-mobile')





/**video */

let videoBloc1 = document.getElementById('videoBloc1')
let videoPlayer1 = document.getElementById('videoPlayer1')
let videoBloc2 = document.getElementById('videoBloc2')
let videoPlayer2 = document.getElementById('videoPlayer2')