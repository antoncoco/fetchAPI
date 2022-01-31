import { getChuckJoke } from "../helpers/getChuckJoke.js";

const cardText = document.querySelector('.card__text');
const button = document.querySelector('.button');

async function showCard() {
  cardText.innerText = "Loading...";
  cardText.classList.add("card__text--loading");
  try {
    const {value} = await getChuckJoke();
    cardText.innerText = value;
  } catch (error) {
    cardText.innerText = "Upps! Something went wrong :(";
    console.error(error);
  }finally{
    cardText.classList.remove("card__text--loading");
  }
}

window.addEventListener('load', function(){
  showCard();
});

button.addEventListener('click', function(){
  showCard();
})



