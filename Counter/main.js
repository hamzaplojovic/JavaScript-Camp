var number = document.getElementById("countNumber");
var increase = document.getElementById("increase");
decrease = document.getElementById("decrease");
reset = document.getElementById("reset");

var myFunc = increase.addEventListener("click", () => {
        current_value = parseInt(number.innerText);
        number.innerText = new String(current_value += 1)
})

var myFunc2 = decrease.addEventListener("click", () => {
        current_value = parseInt(number.innerText);
        number.innerText = new String(current_value -= 1)
})

var myFunc3 = reset.addEventListener("click", () => {
        current_value = parseInt(number.innerText);
        number.innerText = new String(0)
})