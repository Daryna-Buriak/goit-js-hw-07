/*Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
Для генерування випадкового кольору використовуй функцію getRandomHexColor().
Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.*/
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.querySelector("body");

function colorChange() {
  //change body background via inline style
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  //add colour name to span
  textColor.innerText = randomColor;
}

colorChangeBtn.addEventListener("click", colorChange);
