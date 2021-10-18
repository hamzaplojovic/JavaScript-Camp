container = document.getElementById("container");
genNew = document.getElementById("genNew");
genNew2 = document.getElementById("genNew2");
color = document.getElementById("color");
genNew3 = document.getElementById("genNew3");
color3 = document.getElementById("color3");
genNew4 = document.getElementById("genNew4");
color4 = document.getElementById("color4");

var setColor = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("1").style.backgroundColor = "#"+randomColor
    var color_name1 = color.innerHTML = "#" + randomColor
}
var setColor2 = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("2").style.backgroundColor = "#"+randomColor
    var color_name2 = color2.innerHTML = "#" + randomColor

}

var setColor3 = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("3").style.backgroundColor = "#"+randomColor
    var color_name3 = color3.innerHTML = "#" + randomColor

}
var setColor4 = () => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("4").style.backgroundColor = "#"+randomColor
    var color_name4 = color4.innerHTML = "#" + randomColor
}




genNew.addEventListener("click", setColor);
genNew2.addEventListener("click", setColor2);
genNew3.addEventListener("click", setColor3);
genNew4.addEventListener("click", setColor4);



