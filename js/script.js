/*commandes modale régles*/
let rulesModal = document.querySelector('.rules-modal');
let newGameModal = document.querySelector('.new-game-modal')
let btnRulesModal = document.querySelector('#btn-modal');
let btnRulesModalMobile = document.querySelector('#btn-modal-mobile');
let btnCloseModal = document.querySelector('#btn-close-rules-modal');
let btnNewGame = document.querySelector('#btn-new-game');
let btnCloseNewGame = document.querySelector('#btn-close-ng-modal');

/*fermer la modale rules*/
btnCloseModal.addEventListener('click', () => {
    rulesModal.style.display = 'none';
});

/*ouvrir la modale rules*/
btnRulesModal.addEventListener('click', () => {
    rulesModal.style.display = 'flex';
});
/*ouvrir la modale rules mobile*/
btnRulesModalMobile.addEventListener('click', () => {
    rulesModal.style.display = 'flex';
});

/*ouvrir la modale newGame*/
btnNewGame.addEventListener('click', () => {
    newGameModal.style.display = 'flex';
}); 

/*fermer la modale newGame*/
btnCloseNewGame.addEventListener('click', () => {
    newGameModal.style.display = 'none';
});