const listEl = document.querySelector("#categories");
const allCategoriesEl = listEl.children;
console.log(`Number of categories ${allCategoriesEl.length}`);

const items = listEl.querySelectorAll(".item");
const elements = items.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
