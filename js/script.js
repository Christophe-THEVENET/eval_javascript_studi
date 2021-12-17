/*commandes modale régles*/
let rulesModal = document.querySelector('.rules-modal');
let btnRulesModal = document.querySelector('#btn-modal');
let btnRulesModalMobile = document.querySelector('#btn-modal-mobile');
let btnCloseModal = document.querySelector('#btn-close-rules-modal');

/*fermer la modale*/
btnCloseModal.addEventListener('click', () => {
    rulesModal.style.display = 'none';
});

/*ouvrir la modale desktop*/
btnRulesModal.addEventListener('click', () => {
    rulesModal.style.display = 'flex';
});
/*ouvrir la modale mobile*/
btnRulesModalMobile.addEventListener('click', () => {
    rulesModal.style.display = 'flex';
});
