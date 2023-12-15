// LET can be updated but can't be re declared?
let firstName = "John";
firstName = "komal";
console.log(firstName);

// CONST can't be updated nor re-declared
const Profile = {
  firstName: "Mohit",
  address: "haldwani",
};
console.log(Profile);

// arithmetic operators
let a = 5;
let b = 2;
console.log("a+b=", a + b);
console.log("a-b=", a - b);
console.log("a*b=", a * b);
console.log("a/b=", a / b);

//  modulus(%)= if provides the remainder of the division
console.log("a%b=", a % b);
// exponentiation(**)= to give the power
console.log("a**b=", a ** b); //*5^2

//  UNARY OPERATORS= increment (a++/a= a+1), decrement (a--/ a= a-1)

/*
a++(post increment) value is changed from the next line/ ++a(pre increment) value is changed first 
a--(post decrement)/ --a (pre decrement)
*/
let c = 4;
let d = 2;
//post increment
console.log("c=", c, " &d=", d);
console.log("c= ", c++);
console.log(c);
// pre increment
console.log("d=", ++d);

//assignment operators = assigns the value
let x = 5;
let y = 5;
x += 4; // x =  x+4
console.log("x=", x);

y %= 4; // y=  y%4
console.log("y=", y);

// COMPARISON OPERATORS
/* 
==(equal to)
===(equal to & type) strict value it differentiate bw string and
!== (not equal to & type) same applies 
!= (not equal to)

*/

let k = 5;
let m = 6;
console.log(k > m);
console.log(k >= m);
console.log(k < m);

console.log("k==m", k == m);
console.log("k!=m", k != m);
console.log("k!==m", k !== m);
console.log("k===m", k === m);

/* LOGICAL OPERATOR
   evaluate multiple expressions then provide the result */

// 1. logical AND (&&)= jb sari condition true hongi tb vo true print krega
let u = 5;
let v = 6;

let cond1 = u < v; // true
let cond2 = u != 5; // true
console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 || cond2", cond1 || cond2);
console.log("! (5===6))", !(5 === 6));

// CONDITIONAL STATEMENT

//1. IF statement

let age = 17;

if (age >= 18) {
  console.log("You are eligible to vote");
}

if (age < 18) {
  console.log("you can't vote");
}

//2. IF- ELSE statement

let num = 23;

if (num % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}
//3. ELSE-IF statement
let mode = "light";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "light") {
  color = "white";
} else if (mode === "blood") {
  color = "red";
} else {
  color = " golden";
}

console.log(color);

//TERNARY OPERATOR (simpler/compact if-else)
let marks = 10;
let result = marks >= 33 ? "pass" : "fail";
console.log(result);

//Qsl. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

// let Number = prompt("Enter a Number:");
// if (Number % 3 === 0) {
//   console.log(Number, "is multiple of 3");
// } else {
//   console.log(Number, "is not a multiple of 3");
// }

// Practice q- 2

let score = 95; //prompt("Enter your score (0-100)");
let grade;
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}

console.log("According to your score Your Grade is", grade);

//LOOPS
//1. For Loops
for (let i = 1; i <= 5; i++) {
  console.log("Hello World");
}
for (let x = 1; x <= 10; x++) {
  console.log("web development");
}
//calculate sum of 1 to 100 number
let sum = 0;
n = 100;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log("sum=", sum);

//2.WHILE LOOP
let i = 1;
while (i <= 5) {
  console.log("i=", i);
  i++;
}

//3. do-while loop

i = 1;
do {
  console.log("apna clg");
  i++;
} while (i <= 5);

//FOR-OFF LOOP
/* for (let val of str Var){
  do some work
} */
let size = 0;
let str = "Komal";
for (let i of str) {
  //iterator -> characters
  console.log("i=", i);
  size++;
}
console.log("string size=", size);

//for -in loop used for object
/* for (let key in objVar){
  do some work
} */
let student = {
  name: "komal",
  age: 19,
  CGPA: 8.5,
  isPass: true,
};

for (let key in student) {
  console.log("key=", key, "value=", student[key]);
}

//practice
for (let Count = 0; Count <= 100; Count++) {
  if (Count % 2 === 0) {
    // even number
    console.log("Count=", Count);
  }
}
/*let gameNum = 12;

let userNum = prompt("guess the number");
while (userNum != gameNum) {
  userNum = prompt("you entered wong num. guess the right num:");
}

console.log("congratulations, you entered the right number ");*/

//STRINGS is a sequence of characters used to represent text

let str1 = "ApnaCollege";
console.log(str1[6]);
let obj = {
  item: "pen",
  price: 10,
};

//TEMPLATE LITERALS
let output = `the cost of  ${obj.item} is ${obj.price}`;
console.log(output);

let school = {
  subject: "maths",
  teacher: "Mr.Kumar",
};
console.log(`the ${school.subject} subject is taught by ${school.teacher}`);

// let stdName = prompt("enter your name:");
// console.log(`@${stdName}${stdName.length}`);

//ARRAYS
let arr = [87, 93, 56, 78, 92];
console.log(arr);
let heroes = ["batman", "spiderman", "thor", "komal"];
