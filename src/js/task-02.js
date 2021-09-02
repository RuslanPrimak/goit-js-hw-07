"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listItems = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  return listItem;
});

document.querySelector("#ingredients").append(...listItems);
