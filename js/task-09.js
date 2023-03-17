function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBackground = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  bodyBackground.style.backgroundColor = `${getRandomHexColor()}`;
  colorValue.textContent = `${getRandomHexColor()} `;
});
