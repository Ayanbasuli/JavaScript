const colors = ["red", "green", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = color[randomNumber];

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
