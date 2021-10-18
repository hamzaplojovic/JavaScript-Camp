// var changed = document.getElementById("paragraph")
// changed.addEventListener("click",function(){
//     changed.innerText = "hi"
// })


// document.write(5+6)

// alert("Hello World!")

// console.log(5+6);
// console.log(window)
// console.log(document)

//================================================================================
//================================================================================

//  <==============================    LET    ===================================>

// let a = "John"           The let variables cannot be redaclared
// let a = 0;

// {
//     let a = 0
// }
// The a cannot be accesed from here because it's let variable

//  <==============================    VAR    ===================================>

// var a = 0;                       This can be done with var variables
// var a = 1;       

// {
//     var a = 0;
// }
// The a can be accessed from here because it's var variable

//  <============================    CONST    ===================================>

// const PI = 3.14;
// PI = 3.15;    This is error!
// PI += 0.1     This is error!

// Const can't be changed in any shape or form!

// const PI;
// PI = 3.14;           This is error;

// Const also must be assigned!

//=============================================================================

//  <=====================    Functions    ===========================>

// function myFunc(){
//     console.log("Hello, World!")             // Example of function
// }                                                
// myFunc();


// function NAME (parameter1, parameter2, paremeter3){
    // code that is gonna be executed
//}

// function addition(a, b){
//     return console.log(a*b)
// }
// addition(7, 8)

//================================================================================

// INPUT
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name: ", (your_name)=>{  Example of Anonymous function
//     console.log("Hello, " + your_name);
//     rl.close()
// })

//==============================================================================
//                                OBJECTS

// const car = {type:"Fiat", model:500, color:"white"};
// console.log(car)

// ==============================================================================
                            //    STRINGS

// let my_name = "Hamza";
// console.log("String: "+my_name);
// console.log("String Length: "+my_name.length);

// let x = "John";
// let y = new String("John")     // Making object out of string
// console.log(y)

// let fruit = "banana";
// console.log(fruit.slice(2, 4)); // Output is the part of string that we selected
//                                 // these parameters are first index and second index

// let fruit2 = "Apple, Banana, Kiwi"                       
// console.log(fruit2.slice(4));   // The output is string from 4 th index to last index

// let text = "Please visit Microsoft!"
// let newText = text.replace("Microsoft", "W3Schools!")
// console.log(newText)


// let u = "Hamza";
// let upper = u.toUpperCase();
// let lower = u.toLowerCase();
// console.log(upper, lower);

// let text1 = "Hello"
// let text2 = "World"
// console.log(text1.concat(" ",text2))


// let string = "          Hello          "
// console.log(string.trim())                 

// let number = "5";
// let pad_start_number = number.padStart(4, 0)
// let pad_end_number = number.padEnd(4, 0)
// console.log(pad_start_number);
// console.log(pad_end_number);


// let word = "Hello World!"
// console.log(word[1]);
// console.log(word.charAt(1));


// let array_from_string = "Hamza"
// console.log(array_from_string.split(''))

//===============================================================================
//                                  Numbers

// let num1 = 123;
// console.log(num1.toString())
// console.log((123+32).toString())

// let z = 9.6645;
// console.log(z.toExponential(2));
// console.log(z.toFixed(2))
// console.log(z.toPrecision(2))
// console.log(z.valueOf())

// let string_to_int = "5";
// console.log(Number(string_to_int));
// console.log(parseInt(string_to_int));
// console.log(parseFloat(string_to_int));


// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.NaN)                   // Nan - Not a Number


// ===============================================================================
//                             Arrays

// const array = ["bmw", "audi", "mercedes"]
// console.log(array);


// console.log(array[1]);
// console.log(array[-1])

// const new_array = new Array("Bmw", "Audi", "Saab")
// console.log(new_array)

// const array2 = [1,2, 3, 4, 5,6];
// console.log(array2);
// array2[2] = 90;
// console.log(array2);


// const array3 = [5, 2, 3, 3, 4, 5, 6]
// console.log(array3.sort())


// const array4 = ["item1", "item2", "item3"]
// array4.push("item4")
// console.log(array4)
// console.log(array4.join(" * "))

// const popped = array4.pop()
// const shifted = array4.shift()
// const unshifted = array4.unshift("item9")
// console.log(popped);
// console.log(shifted);
// console.log(unshifted);

// const array5 = ["Kiwi", "Banana", "Cherry"]
// array5[0] = "Rasberry"
// console.log(array5);

// const array6 = ["Kiwi", "Banana", "Cherry"]
// array6.splice(0, 0, "Lemon", "Strawberry") // Adding 2 element on 0 index without deleting any of other elements
// console.log(array6);

// const array7 = ["Kiwi", "Banana", "Cherry"]
// array7.splice(0, 1);  // Using a splice method to delete first elements
// console.log(array7);

// const array8 = [1, 2, 3, 4, 5]
// const array9 = [6, 7, 7, 8, 9]
// const merged = array8.concat(array9)
// console.log(merged);

// const array1 = ["Banana", "Orange", "Apple", "Mango"]
// console.log(array1.sort());
// console.log(array1.reverse());

// const array11 = [45, 7, 8, 6, 7, 8]
// console.log(array11.forEach((value)=>{
//     console.log("io")
// }))


// // Makes array from strings
// console.log(Array.from("Wassup?"));

//============================================================================
//                         Boolean

// let bool_var = true             // This is variable with bool value

// console.log(10 > 9)             // Evetything with value is true

// let x = 0;
// console.log(Boolean(x));        // Everything without value is false


//=============================================================================
//                         FOR LOOP

// x = ["item1", "item2", "item3"]
// empty = []
// for (let index = 0; index < x.length; index++) {
//     element = x[index]
//     empty.push(element)
// }
// console.log(empty)

// for (stetament1, stetament2, stetament3) {
// }

// ===============================================================================
//                               IF STETAMENT

// const time = 17
// if (time < 10) {
//     greeting = "Good morning";
//     console.log(greeting);

// } else if (time < 20) {
//     greeting = "Good day";
//     console.log(greeting);
// } else {
//     greeting = "Good evening";
//     console.log(greeting);

// }
// ===============================================================================
//                               SWICTH

// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
// }
// console.log(day);