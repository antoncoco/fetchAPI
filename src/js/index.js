import { getChuckJoke } from "../helpers/getChuckJoke.js";

const cardText = document.querySelector('.card__text');

async function showCard() {
  const {value} = await getChuckJoke();
  cardText.innerText = value;
}

window.addEventListener('load', function(){
  showCard();
})

