// ---------------->  CONTENTS <--------------------------

// CONSOLE
// TYPE CONVERSION
// TYPE COERSION
// MATHS OBJECT
// STRING METHODS
// TEMPLATE LITERALS
// ARRAYS
// OBJECT LITERALS
// Date and time
//if/else / Comparision
// Switches
//Functions:
/* {
        Function Expressions
        default value
        Immediately Invokable function Expressions : IIFEs
} */

//General loops:
/*{
         for loop ; break and continue
         forEach
         For..in loop
         map
}*/

// WINDOW OBJECT

// ==================================================== //

// CONSOLE
// // alert("hello world");

// console.log("hello");
// console.log(12);
// console.log(true);
// var a = "aer";
// console.log(a);
// console.log([1, 2, 3, 4, 5, 6]);
// console.table({ a: 2, b: 4 });
// console.clear();
// console.error("this error");
// console.clear();
// console.time("a");

// console.log("hello");
// console.log(12);
// console.log(true);
// var a = "aer";
// console.log(a);
// console.log([1, 2, 3, 4, 5, 6]);
// console.table({ a: 2, b: 4 });
// console.timeEnd("a");

// const name = true;

// const array = [1, 2, 3, 4, 5];

// const address = {
//   city: "Nijgadh",
//   ward: 8,
// };

// const today = new Date();
// console.log(today);

// console.log(typeof today);

// ------------------------------------------ //

// TYPE CONVERSION

// let val;

// val = String(5);
// val = (5).toString();

// val = Number("5");
// val = Number(true);
// val = Number(false);
// val = Number("hello");
// val = Number("100.300");
// val = parseInt("100");
// val = parseFloat("100.300");

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

// TYPE COERSION

// const val1 = 5;
// const val2 = "6";
// sum = val1 + val2;
// console.log(sum);

// ---------------------------------------------//

// MATHS OBJECT

// const num1 = 100;
// const num2 = 50;
// val = num1 % num2;

// val = Math.PI;
// val = Math.round(2.4);
// val = Math.ceil(val);
// val = Math.sqrt(64);
// val = Math.abs(-9);
// val = Math.pow(2, 3);
// val = Math.min(1, -2, 3, 4);
// val = Math.max(2, 100, 5);
// val = Math.floor(Math.random() * 101);
// // randon gives from [0,1) so added 1

// console.log(val);

// ---------------------------------------//

// STRING METHODS

// const firstName_ = "Archit ";
// const firstName = "Archit";
// const lastName = "Adhikari";
// const str = "I am Archit Adhikari.";
// const tag = "web developemt, css, js, web";

// let val;

// val = firstName_ + lastName;

// // Concatenation
// val = firstName + " " + lastName;

// // append
// val = "Archit";
// val += " Adhikary";

// val = "Hello, My name is " + firstName + " " + lastName + ".";

// // Escaping
// // val = 'That's awesome, I can't wait' ;
// val = "That's awesome, I can't wait.";
// val = "that's awesome, I can't wait.";

// //length property
// val = firstName.length;

// //concat() method
// val = firstName.concat(" ", lastName);

// //Change case
// val = firstName.toUpperCase();
// val = firstName.toLocaleLowerCase();

// val = firstName[1];

// //indexof()
// val = firstName.indexOf("i");
// val = firstName.lastIndexOf("i");
// // last occurence of a char if more than 1 is present

// // charAt()
// val = firstName.charAt(4);
// //last char
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(1, 4);
// val = firstName.substring(4, 1);

// val = firstName.substring(3);

// // [1,4) - doesn't include last val

// // slice()
// val = firstName.slice(1, 4);
// val = firstName.substring(3);
// val = firstName.slice(-2);
// val = firstName.slice(4, 0);

// // slice and substring is basically same thing except that it can negative value

// // split()
// // returns string into array based on the seperator
// val = str.split(" ");
// // space as seperator
// val = tag.split(",");
// // comma as seperator

// // replace()
// val = str.replace("Archit Adhikari", "Archer");

// // includes()
// val = str.includes("archit");
// val = str.includes("Archit");

// console.log(val);

// --------------------------------------------//

// TEMPLATE LITERALS

// const name = "Arch";
// const age = 24;
// const job = "web";
// const city = "ngd";

// function hello() {
//   return "Hello";
// }

// // Without template literals (es5)
// html =
//   "<ul> <li>Name: " +
//   name +
//   "</li> <li>Age: " +
//   age +
//   "</li> <li>Job: " +
//   job +
//   "</li> <li>City: " +
//   city +
//   "</li> <ul>";

// // With template literals (ES6)
// html = `
//    <ul>
//         <li> Name: ${name} </li>
//         <li> Age: ${age} </li>
//         <li> Job: ${job} </li>
//         <li> City: ${city} </li>
//         <li> ${2 + 2} </li>
//         <li> ${hello()} </li>
//         <li> ${age > 20 ? "over 20" : "under 20"} </li>
//     </ul>
// `;

// document.body.innerHTML = html;

// -------------------------------------------------------- //

// ARRAYS

// const numbers = [1, 2, 3, 4, 5, 10, 55, 44, 12, 20];
// const numbers2 = new Array(1, 2, 3, 4, 5, 6);
// const fruits = ["apple", "banana", "mango", "berry", "apricot"];
// const mixed = [22, "Hello", true, undefined, { a: 1, b: 1 }];

// let val;

// // Get array length
// val = numbers.length;

// // check if is Array
// val = Array.isArray(numbers);
// val = Array.isArray("hello");

// // get array
// val = numbers[1];

// // replace array
// numbers[1] = 22;

// // get index of
// val = numbers.indexOf(5);

// // Mutating arrays

// // add into array
// numbers.push(8);
// numbers.unshift(0);

// // delete from array
// numbers.pop();
// numbers.shift();

// // splice array
// val = numbers.splice(1, 5);
// // removing array from 1 to 5 position

// // reverse
// numbers.reverse();

// // concatinate array
// val = numbers.concat(numbers2);

// // sorting array
// val = fruits.sort();
// val = numbers.sort(); // sort the first digit only

// // use compare  funtion to sort number array
// val = numbers.sort(function (x, y) {
//   return x - y;
// });
// // reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// // Find
// function under50(num) {
//   return num < 50;
// }
// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);

// ----------------------------------------------------- //

// OBJECT LITERALS

// const person = {
//   firstname: "Arch",
//   lastname: "Adh",
//   age: 24,
//   email: "arch@archmail.com",
//   hobbies: ["code", "music"],
//   address: {
//     city: "Ngd",
//     Province: 2,
//   },
//   getBirthyear: function () {
//     return 2020 - this.age; //to access data pertaining to object itself use this property
//   },
// };

// let val;

// val = person;
// val = person.firstname;
// val = person["lastname"];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.address;
// val = person.address.city;
// val = person["address"]["Province"];
// val = person.getBirthyear();

// console.log(val);

// const people = [
//   { name: "Chandler", sex: "nhanhanhanhanha" },
//   { name: "Joey", sex: "How you doin!" },
//   { name: "Ross", sex: "It's been 3 months" },
// ];

// for (i = 0; i < people.length; i++) {
//   console.log(people[i].name);
//   console.log(people[i].sex);
// }

// --------------------------------------------------- //

// DATE AND TIME Object

// let val;

// const today = new Date();
// let birthday = new Date("8-13-1996 12:27:36");
// birthday = new Date("Aug 13 1996");
// birthday = new Date("08/13/1996");

// val = today.getMonth();
// // starts from 0; jan is 0
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime(); // ???
// birthday.setMonth(2); //index starts at 0
// birthday.setDate(3);
// birthday.setFullYear(1990);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(59);

// console.log(birthday);

// // More on dates at
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// ------------------------------------------//

// If Else / Conditional

// const id = "100";

// if (id == 100) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// if (id != 100) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// if (id === 100) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// if (id !== 100) {
//   console.log("passed");
// } else {
//   console.log("failed");
// }

// Test if undefined
// if (typeof id !== "undefined") {
//   console.log(`ID is ${id}`);
//   console.log("ID is " + id);
// } else {
//   console.log("No ID");
// }

// and : && ; or : || ;

//ternary operator
// console.log(id === 100 ? true : false);

// if/esle can be used without braces; not recommneded
// if (id === 100) console.log("true");
// else console.log("false");

//--------------------------------------------//

// SWITCH STATEMENT

// const color = "red";

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("neither red nor blue");
//     break;
// }

// let day;

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }

// console.log("today is " + day);

//-----------------------------------------//

//FUNCTIONS

// // without args or param
// function greet() {
//   // fn declaration

//   return "hello"; // all contents within is fn scope
// }
// console.log(greet());

// // With args
// function greet(fname, lname) {
//   return "Hello! " + fname + " " + lname;
// }
// console.log(greet("Arch", "Adh."));

// // default value ES5
// function greet(fname, lname) {
//   if (typeof fname === "undefined") {
//     fname = "Jon";
//   }
//   if (typeof lname === "undefined") {
//     lname = "Doe";
//   }
//   return "Hello! " + fname + " " + lname + ".";
// }
// console.log(greet());

// // default value ES6
// function greet(fname = "Jon", lname = "Doe") {
//   return `Hello! ${fname} ${lname}.`;
// }
// console.log(greet());

// // Function Expressions
// // using variables as function
// const sqr = function (x) {
//   return x * x;
// };

// console.log(sqr(5));

// //Immediately Invokable function Expressions : IIFEs
// //function that you declare and run at the same time

// (function () {
//   console.log("IIFE ran..");
// })();

// (function (name) {
//   console.log("Hello " + name);
// })("Arch");

// GENERAL LOOPS

// // for loop ; break and continue
// for (let i = 0; i < 11; i++) {
//   if (i === 2) {
//     console.log("2 is my fav number");
//     continue; // continue to next iteration without processing  current one
//   }
//   if (i === 7) {
//     console.log("7 is sashwat satya, Need no more, Stop it right here");
//     break; //breaks and stops loop
//   }
//   console.log(i);
// }

// // Loop through Array
// cars = ["Ford", "Sukuki", "Honda", "Mercedes"];

// // basic for
// for (i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// //for each (uses anynomous function)
// cars.forEach(function (car) {
//   console.log(car);
// });

// cars.forEach(function (car, index) {
//   console.log(index + ": " + car);
// });

// cars.forEach(function (car, index, array) {
//   console.log(index + ": " + car);
//   console.log(array);
// });

// // Map
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Batista" },
//   { id: 3, name: "Randy" },
//   { id: 4, name: "Messi" },
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

// // For..in loop

// const users = {
//   fname: "Archit",
//   lname: "Adh",
//   age: 23,
// };

// for (let x in users) {
//   console.log(x);
// }

// for (let x in users) {
//   console.log(x + " :" + users[x]);
// }

//------------------------------------------//

// WINDOW OBJECT / METHODS / PROPERTIES
// used DOM object instead, these look old
// Dom is part of window object

// console.log(window);

// Alert
// window.alert("Hello Mate");
// alert("ello maite");

// Prompt
// prompt("your name?");
// const age = prompt();
// alert(age);

// Confirm
// confirm("are you sure?");

// let val;
// // Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// Scroll Points
// val = window.scrollX;
// val = window.scrollY;

// Location Object
// val = window.location;
// val = window.location.hostname;

// // Redirect
// window.location.href = "http://google.com";

////Reload
// window.location.reload();

//// History Object
// window.history.go(-1);
// val = window.history.length;

// Navigator Object //Browser
// val = window.navigator;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;

// console.log(val);

//-----------------------------------------------------//
