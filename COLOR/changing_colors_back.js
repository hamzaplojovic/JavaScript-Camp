var remote_function = palette1.addEventListener("click", () => {
  document.getElementById("1").style.backgroundColor = localStorage
    .getItem("colors")
    .slice(0, 7);
  document.getElementById("color").innerHTML = localStorage
    .getItem("colors")
    .slice(0, 7);
  document.getElementById("2").style.backgroundColor = localStorage
    .getItem("colors")
    .slice(8, 15);
  document.getElementById("color2").innerHTML = localStorage
    .getItem("colors")
    .slice(8, 15);
  document.getElementById("3").style.backgroundColor = localStorage
    .getItem("colors")
    .slice(15, 22);
  document.getElementById("color3").innerHTML = localStorage
    .getItem("colors")
    .slice(15, 22);
  document.getElementById("4").style.backgroundColor = localStorage
    .getItem("colors")
    .slice(22, 29);
  document.getElementById("color4").innerHTML = localStorage
    .getItem("colors")
    .slice(22, 29);
});
