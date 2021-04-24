import './style.css';

console.log('funguju!');

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('#nav');
const navIElm = document.querySelectorAll('#nav-i');

navBtnElm.addEventListener('click', (e) => {
  navElm.classList.toggle('nav-closed');
});

navIElm.forEach((items) => {
  items.addEventListener('click', (e) => {
    navElm.classList.toggle('nav-closed');
  });
});
