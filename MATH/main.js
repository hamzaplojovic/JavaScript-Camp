var option = window.prompt("Choose the option: \n 1) Addition \n 2) Substraction \n 3) Multiplication \n 4) Division");

function numbers(){
  num1 = window.prompt("Enter the first number: ");
  num2 = window.prompt("Enter the second number: ");
}


if (option == "1"){
  numbers();
  var result = parseInt(num1) + parseInt(num2);
  alert(result);
}
if (option == "2"){
  numbers();
  var result = parseInt(num1) - parseInt(num2);
  alert(result);
}
if (option == "3"){
  numbers();
  var result = parseInt(num1) * parseInt(num2);
  alert(result);
}
if (option == "4"){
  numbers();
  var result = parseInt(num1) / parseInt(num2);
  alert(result);
}
