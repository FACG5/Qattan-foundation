/* global document */
function move(x) {
  x.classList.toggle('change');
}

// for the add ticket page
const menu = document.getElementsByClassName('overlay')[0];
const show = () => {
  menu.classList.toggle('change');
};

const doneBtn = document.querySelector('#done-button');
const unDoneBtn = document.querySelector('#undone-button');

const doneSection = document.querySelector('#done');
const unDoneSection = document.querySelector('#undone');


// unDoneSection.style.display = 'none';

unDoneBtn.addEventListener('click', () => {
  doneSection.style.display = 'none';
  unDoneSection.style.display = 'block';
});

doneBtn.addEventListener('click', () => {
  unDoneSection.style.display = 'none';
  doneSection.style.display = 'block';
});
