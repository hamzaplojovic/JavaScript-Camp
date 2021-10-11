btn = document.getElementById("btn")
btn.addEventListener("click",ime)

function ime(){
    input1 = document.getElementById("input1")
    var num1 = input1.value
    input1.value = ""

    input2 = document.getElementById("input2")
    var num2 = input2.value
    input2.value = ""


    result = parseInt(num1) + parseInt(num2)
    result = document.getElementById("result").innerHTML = "Result is "+result;
}