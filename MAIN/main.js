//=============================================================================
//==================================Numbers====================================
//=============================================================================
// var num1 = 3;
// var num2 = num1 + 3;
// var res  = num1 + num2;
// console.log(res)


// var name = window.prompt("Enter your name: ");
// alert("Your name is: "+ name);
// console.log(name)

// myvar = 5;
// console.log(myvar % 2);

// myvar = 5;
// myvar = myvar + 10;
// myvar += 10;
// console.log(myvar);

// myvar = 15;
// // myvar = myvar  10;
// myvar -= 10;
// console.log(myvar);
//=============================================================================
//==================================Strings====================================
//=============================================================================
// var myFirstName = "Hamza";
// var myLastName  = "Plojovic";
// alert(myFirstName + " " + myLastName));

// var myString = "I am \"double quoted\" string inside \"double quotes\"";
// console.log(myString);

// var string = "First Line\n\t\Second Line\n\Third Line";
// console.log(string);

// Zero based indexing
// Where the 1 is 0
// var name = "Hamza";
// console.log(name[0]);

//Finding last number in string
// var name = "Hamza";
// console.log(name[name.length - 1]);

// var full_name = "Hamza Plojovic"
// console.log("")
// var f_name = full_name.slice(0, 5);  // These parameters are for first letter
// var l_name = full_name.slice(6, 14)  // that we want to slice and the last letter
//                                      // that we want to slice
// console.log(f_name)
// console.log(l_name)
// console.log("")

//=============================================================================
//===================================Arrays====================================
//=============================================================================
// Arrays
// myArray = ["First Item", 2, 2.6];
// console.log(myArray[0]);

// Nested array
// myArray = [["First Item", "Second Item"], [2, 2.6]];
// console.log(myArray[1]);

// Changing item in array
// myArray = [1, 2, 3, 4, 5];
// myArray[1] = 9;
// console.log(myArray);

// myArray = [["First Item", "Second Item"], [2, 2.6]];
// myArray[0][0] = "Changed Item";
// console.log(myArray[0]);

// myArray = [2, 3,4, 5, 6];
// myArray.push(7, 8);
// console.log(myArray);

// myArray = [2, 3,4, 5, 6]; This removes last item in array
// myArray.pop();
// console.log(myArray);

// myArray = [2, 3,4, 5, 6]; This removes the first item in array
// myArray.shift();
// console.log(myArray);

// myArray = [2, 3,4, 5, 6];  This changes the first item 2 to 1
// myArray.shift();
// myArray.unshift(1);
// console.log(myArray);

// myArray = [1, 2, 3]
// console.log(myArray.indexOf(2));

// var item1 = 'item1'
// var newarray = item1.replace('item1', 'replaced')
// console.log(newarray);

// var my_name = "Hamza Plojovic";
// var upperName = my_name.toUpperCase();
// console.log(upperName);

// var my_name = "HAMZA PLOJOVIC";
// var lowerName = my_name.toLowerCase();
// console.log(lowerName);

// var myName = "Hamza"
// console.log(myName.split(""));  //Spliting string to letters

//=============================================================================
//================================Functions====================================
//=============================================================================

// function ourFunction(){
//   console.log("Hello, World, but with function");
//   alert("Hello, World, but with function");
// }
//
// ourFunction();

// function ourFunction(){
//   num1 = 5;
//   return num1
// }
//
// ourFunction();


a = (ime )=>{
    console.log(ime);
}

a("daris")


//=============================================================================
//=============================Dictionaries====================================
//=============================================================================

// var person = {
//     firstName : "John",
//     lastName : "Smith",
//     age      :   30,
//     hobbies : ['music', 'reading', 'movies'],
//     address : {
//         street: '50 main street',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
//========================================================================
// console.log(person);
// console.log(person.hobbies);
// console.log(person.address);
//========================================================================
// console.log(person.hobbies[0]);
//========================================================================
// console.log(person.address.street);
// person.address.street = "Changed Adress take 2"
// console.log(person.address.street);
//========================================================================
// person.email = "johnsmith@gmail.com"
// console.log(person)
// console.log(person.email)
//==========================================================================
//=============================For Loops====================================
//==========================================================================

// THIS IS EXAMPLE OF FOR LOOP
// for (let i = 0; i <= 10; i ++){
//     console.log("Foor loop number: "+ i)
// }

// array = ['element1', 'element2', 'element3'];
// for (let i = 0; i < array.length; i++){
//     console.log(i)
// }
// console.log("This is how many elements this array has")
//=============================================================================
// for (starts at 0, goes to some number, gets bigger by one){
    // block of code ();
//}
//=============================================================================
// For Loop trough Array
// array = ['item', 'item2', 'item3']
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
    
// }
//=============================================================================
// For Loop trough Dictionary
// var person = {
//     name:"John",
//     age:30,
//     stret:"50 Smith Street"
// }
// for (elem in person){
//     console.log(elem+" = "+person[elem]);
// }

// Printing all even numbers to 10
// array = []
// for (let i = 0; i < 10; i+=2) {
    // array.push(i)
// }
// console.log(array)

//============================================================================
//============================DATES===========================================
//============================================================================
// var d = new Date();
// console.log(d)
//============================================================================
//===========================MATH=============================================
//============================================================================
// var pi = Math.PI;
// console.log(pi)
// var eulers = Math.E;
// console.log(eulers)
// var square = Math.SQRT2;
// console.log(square);
// var pow = Math.pow(8, 2);
// console.log(pow)
//=============================================================================