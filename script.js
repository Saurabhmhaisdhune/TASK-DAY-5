//1)Do the below programs in anonymous function & IIFE
//a)Print odd numbers in an array
let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
let x = function (arr) {  
    console.log(arr.filter(n => n%2));  
};  
x(arr);

//b)Convert all the strings to title caps in a string array
const names3 = ['Akash', 'Rushikesh', 'Shubham', 'SANTOSH'];
const lowercased3 = names3.map(name3 => name3.toLowerCase());
console.log(lowercased3);
//c)Sum of all numbers in an array
let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const sum = function (numStr) {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
     sum = sum + numStr[i];
    }
  return sum;
}
console.log(sum(numStr));
//d)Return all the prime numbers in an array
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);


//3)Do the below programs in arrow functions
//a)Print odd numbers in an array
let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12]
let odds = arr2.filter(n => n%2)
console.log(odds)
//b)Convert all the strings to title caps in a string array
const names = ['Ali', 'Atta', 'Alex', 'John'];
const lowercased = names.map(name => name.toLowerCase());
console.log(lowercased);
//c)Sum of all numbers in an array
var numberss = [3,5,7,2,3,44,25];
var sums = numberss.reduce((x, y) => x + y);
console.log(sums);
//d)Return all the prime numbers in an array
var numArrayy = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArrayy = numArrayy.filter((numbe) => {
  for (var i = 2; i <= Math.sqrt(numbe); i++) {
    if (numbe % i === 0) return false;
  }
  return true;
});
console.log(numArrayy);