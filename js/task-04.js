const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

const counterEl = document.querySelector("#value");

let counterValue = 0;

function decrementValue() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}
function incrementValue() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", decrementValue);
incrementBtnEl.addEventListener("click", incrementValue);
