"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const markup = images.reduce(
  (string, image) =>
    string + `<li><img src=${image.url} alt=${image.alt}></li>`,
  ""
);

const imagesElement = document.querySelector("#gallery");
imagesElement.insertAdjacentHTML("beforeend", markup);
imagesElement.style.display = "flex";
// imagesElement.style.justifyContent = "center";
// imagesElement.style.justifyContent = "space-around";
// imagesElement.style.height = "5em";
// imagesElement.style.alignItems = "center";
imagesElement.style.alignItems = "baseline";
