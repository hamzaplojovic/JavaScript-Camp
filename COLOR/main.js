import * as remote_file from 

localStorage.clear();

container = document.getElementById("container");
genNew = document.getElementById("genNew");
genNew2 = document.getElementById("genNew2");
color = document.getElementById("color");
genNew3 = document.getElementById("genNew3");
color3 = document.getElementById("color3");
genNew4 = document.getElementById("genNew4");
color4 = document.getElementById("color4");
saveButton = document.getElementById("saveButton");
palette1 = document.getElementById("palette1");
var setColor = (arg1, arg2) => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById(arg1).style.backgroundColor = "#" + randomColor;
  var color_name1 = (arg2.innerHTML = "#" + randomColor);
};

var save_palette = (color1, color2, color3, color4) => {
  var pallete_item = new Array(
    document.getElementById(color1).innerHTML,
    document.getElementById(color2).innerHTML,
    document.getElementById(color3).innerHTML,
    document.getElementById(color4).innerHTML
  );
  localStorage.setItem("colors", pallete_item);
};

genNew.addEventListener("click", () => {
  setColor("1", color);
});
genNew2.addEventListener("click", () => {
  setColor("2", color2);
});
genNew3.addEventListener("click", () => {
  setColor("3", color3);
});
genNew4.addEventListener("click", () => {
  setColor("4", color4);
});
saveButton.addEventListener("click", () => {
  save_palette("color", "color2", "color3", "color4");
});
