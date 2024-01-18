// console.log("Hello World")
// let name = "Titi";
// console.log(name)
// name = "Abiola";
// console.log(name)
// let age = 57;
// let newage = 13;
// let percentage = newage / age;
// console.log(percentage);
// let mystring="hi";
// let otherstring="hello";
// backtick="hi again";
// let num = 31;
// let bol = true;
// let undefinedvariable;
// let emptyvalue;
// console.log(mystring);
// console.log(otherstring);
// console.log(backtick);
// console.log(num);
// console.log(bol);
// console.log(undefinedvariable);
// console.log(emptyvalue);
// console.log(typeof num);
// console.log(typeof mystring);
// console.log(typeof otherstring);
// console.log(typeof backtick);
// console.log(typeof bol);
// console.log(typeof stringbol);
// console.log(typeof stringnum);
// console.log(typeof undefinedvariable);
// console.log(typeof emptyvalue);

// string methods
// let string = "Javascript";
// firstLetter = string [3];
// console.log(firstLetter);
// console.log(string.length);
// console.log(string.length - 1);

// console.log(string.toUpperCase())
// console.log(string.toLowerCase())

// let text ="Programming"
// console.log(text.substring(1, 4));
// console.log(text.substr(1, 4));

// let day = "30 Days of Javascript";
// console.log(day.split());
// console.log(day.split(" "));

// console.log(day.includes("days"));

// let title = "javascript";
// let lastIndex = title.length - 1;
// console.log(title.charAt(0));
// console.log(title.indexOf("j"));
// console.log(day.replace("days","months"));

// assignment operators
// let numOne = 5;
// let numTwo = 4;
// let sum = numOne + numTwo;
// let diff = numOne - numTwo;
// let mult = numOne * numTwo;
// let div = numOne / numTwo;
// let remainder = numOne % numTwo;
// let powerOf = numOne ** numTwo;
// console.log(sum, diff, mult, remainder, powerOf);

// // comparison operator
// let first = 3;
// let second = 2;
// console.log(first > second);
// console.log(first < second);
// console.log(first = second);
// console.log(first === second);
// console.log(first !== second);
// console.log(first <= second);

// console.log("3" == 3);
// console.log("3" === 3);

// console.log(1 == true);
// console.log(0 == true);
// console.log(0 == false);
// console.log("0" === false);

// // logical operator
// let check = 4 > 3 && 10 > 5;
// let see = 4 > 3 && 10  > 5;
// console.log(check,see);

// // let compare = 4 > 3    10 > 5;
// // let value = 4 > 3    10 > 5;
// // let answer = 4 < 3    10 < 5;
// // console.log(compare, value, answer);

// // negation operators
// let negate = !(4 < 3);
// let result = !true;
// console.log(result, negate);

// let count = 20;
// console.log(++count);
// console.log(count++);
// let num = 20;
// num--;
// // console.log(count--);
// // console.log(--count);

// // ternary operators
// let isAMan = true;
// isAMan ? console.log("Yes, he is a man"): console.log("No, he is not a man");  


// console.log


// Symbol
const mySymbol = Symbol()
console.log(mySymbol)
const newSymbol = Symbol("lot")
console.log(newSymbol)


// concatenation
const day = "30days of Javascript";
const love ="I love";
const sentence = love + " " + "studying " + day;
console.log(sentence);

const backtickSentence=  `${love} studying  ${day}`
console.log(backtickSentence);

const myArray = ["Rukaya" , "Marvellous" , "Grace" , "Munirah"];
console.log(myArray);
myArray[0] = "Salamat";
console.log(myArray);

const four=4
console.log(Math.sqrt(four));
console.log(Math.pow(4, 2));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 1);
console.log(Math.max(3, 4, 9, 0));

let random = Math.random() *10 + 1;
const Pi = Math.Pi;
console.log(Math.floor(Pi));
console.log(Math.abs(Pi));
console.log(Math.ceil(Pi));

