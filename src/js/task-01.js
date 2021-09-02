"use strict";

const elementList = document.querySelectorAll("#categories>.item");

console.log(`В списке ${elementList.length} категории.\n\n`);

elementList.forEach((el) => {
  console.log(`Категория: ${el.querySelector("h2").textContent}`);
  console.log(
    `Количество элементов: ${el.querySelector("ul").childElementCount}\n\n`
  );
});
