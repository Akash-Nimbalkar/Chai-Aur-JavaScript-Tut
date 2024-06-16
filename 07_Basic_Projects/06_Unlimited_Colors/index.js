//Generate random colors based on hexcodes

const randomColor = function () {
  const hex = "0123456789ABCDEF";

  let color = "#";
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 16);
    color += hex[num];
  }
  return color;
};

let intervalID;
let startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};

document.querySelector("#start").addEventListener("click", startChangingColor);

let stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector("#stop").addEventListener("click", stopChangingColor);
