const controller = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

controller.addEventListener("input", onFontController);

function onFontController() {
  const size = controller.value;
  text.style.fontSize = `${size}px`;
}
