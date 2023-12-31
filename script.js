'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnsOpenmodal = document.querySelectorAll('.show-modal');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenmodal.length; i++)
  btnsOpenmodal[i].addEventListener('click', openModal);
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnClosemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (esc) {
  if (esc.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
