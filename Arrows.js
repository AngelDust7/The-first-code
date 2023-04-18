let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let i = 1;
for (let li of Articles.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

if (window.matchMedia("(max-device-width: 997px)").matches) {
  /* конфигурация */
  let width = 540; // ширина картинки
  let count = 1; // видимое количество изображений

  let list = Articles.querySelector("ul");
  let listElems = Articles.querySelectorAll("li");

  let position = 0; // положение ленты прокрутки

  Articles.querySelector(".prev").onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    list.style.marginLeft = position + "px";
  };

  Articles.querySelector(".next").onclick = function () {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + "px";
  };
} else if (window.matchMedia("(min-device-width: 1200px)").matches) {
  /* конфигурация */
  let width = 900; // ширина картинки
  let count = 1; // видимое количество изображений

  let list = Articles.querySelector("ul");
  let listElems = Articles.querySelectorAll("li");

  let position = 0; // положение ленты прокрутки

  Articles.querySelector(".prev").onclick = function () {
    // сдвиг влево
    position += width * count;
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position, 0);
    list.style.marginLeft = position + "px";
  };

  Articles.querySelector(".next").onclick = function () {
    // сдвиг вправо
    position -= width * count;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + "px";
  };
}
