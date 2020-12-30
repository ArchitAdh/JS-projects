//function expression
//cant be hoisted
//arrow function is neater way of writing this
//detail in function chapter
const functionExpression = function () {
  return "This is function expression";
};

//arrow function
const arrowFunction = () => {
  return "This is arrow function";
};

//one line function does not need braces
//refactoring above code
const arrowFunctionShorter = () => "This is arrow function one line";
//is same as
const longer = function () {
  return "This is longer method";
};

//Object literal
//shows undefined; thinks the thing inside braces is function body rather than object literal
const obj = () => {
  msg: "Hello";
};
//the fix is
const objFixed = () => ({ msg: "hello" });

// Single Param does not need parenthesis
//vscode has added but is not required
const parameterized = (name) => `Hello ${name}!`;

//Multiple param need parenthesis
const mulParameterized = (fName, lName) => `Hello ${fName} ${lName}!`;

//Arrow functions as callbacks
const users = ["Archit", "Anila", "Achyuta"];

//map() method maps the array into a new array non destructively
const nameLengths = users.map(function (name) {
  return name.length;
});
//shorter
const nameLengthsShorter = users.map((name) => {
  return name.length;
});
//shortest
const nameLengthsShortest = users.map((name) => name.length);

var output;
// output = functionExpression();
// output = arrowFunction();
// output = arrowFunctionShorter();
// output = longer();
// output = obj();
// output = objFixed();
// output = parameterized("Archit");
// output = mulParameterized("Archit", "Adhikari");
// output = nameLengths;
// output = nameLengthsShorter;
output = nameLengthsShortest;
console.log(output);
