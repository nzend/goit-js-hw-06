const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const makeIngradientList = (options) => {
  return options.map((option) => {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = option;
    return listEl;
  });
};
const elements = makeIngradientList(ingredients);
ingredientsList.append(...elements);
