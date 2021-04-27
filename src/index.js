import './style.css';
import { Drink } from './drink/index';

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');

navBtnElm.addEventListener('click', (e) => {
  navElm.classList.toggle('nav-closed');
});

const navIElm = navElm.querySelectorAll('#nav-i');

navIElm.forEach((items) => {
  items.addEventListener('click', (e) => {
    navElm.classList.add('nav-closed');
  });
});

const drinksList = document.querySelector('.drinks-list');

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((json) => {
    json.forEach((drink) => {
      drinksList.appendChild(Drink(drink));
    });
  });
