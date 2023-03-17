const input = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim() !== "") {
    nameLabel.textContent = event.currentTarget.value;
  } else {
    return (nameLabel.textContent = "Anonymous");
  }
}
