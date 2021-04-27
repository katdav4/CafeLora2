import { Layer } from './../layer/index';
import './style.css';

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');

  const drinkProduct = document.createElement('div');
  drinkProduct.classList.add('drink__product');

  const drinkCup = document.createElement('div');
  drinkCup.classList.add('drink__cup');

  const drinkCupImg = document.createElement('img');
  drinkCupImg.src = `/assets/cups/${props.id}.png`;
  drinkCup.appendChild(drinkCupImg);

  const drinkInfo = document.createElement('div');
  drinkInfo.classList.add('drink__info');

  const drinkTitle = document.createElement('h3');
  drinkTitle.textContent = props.name;
  drinkInfo.appendChild(drinkTitle);

  props.layers.forEach((layer) => {
    drinkInfo.innerHTML += Layer(layer);
  });

  const drinkControls = document.createElement('div');
  drinkControls.classList.add('drink__controls');

  const drinkBtnElm = document.createElement('button');
  drinkBtnElm.classList.add('order-btn');
  drinkBtnElm.textContent = 'Objednat';

  drinkBtnElm.addEventListener('click', () => {
    if (props.ordered === false) {
      drinkCup.classList.add('drink__cup--selected');
      drinkBtnElm.textContent = 'Zrušit';
      props.ordered = true;
    } else {
      drinkCup.classList.remove('drink__cup--selected');
      drinkBtnElm.textContent = 'Objednat';
      props.ordered = false;
    }
  });

  drinkControls.appendChild(drinkBtnElm);

  drinkProduct.appendChild(drinkCup);
  drinkProduct.appendChild(drinkInfo);
  drinkElm.appendChild(drinkProduct);
  drinkElm.appendChild(drinkControls);

  return drinkElm;
};
