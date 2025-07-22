const score=900;
console.log(score);//900

const marks =new Number(987);//basically typecasting to number
console.log(marks);//[Number: 987]

const n =marks.toString();//number converted to string
console.log(n[1]);//8
console.log(n.length);//3 -->basically string properties can be used for it now

console.log(marks.toFixed(2));//987.00
//USED FOR NUMBERS --->toFixed round off the number till the decimal place we specify inside ()

//TOPRECISION
let otherNumber=37.768;
console.log(otherNumber.toPrecision(3));//37.8 -->roounded off till 3 digits
//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
//another example
otherNumber=4534.6743;
console.log(otherNumber.toPrecision(3));//4.53e+3 ->(4.53*10^3=4530) -->roounded off till 3 digits


//toLocaleString
const hunderead=10000000000;
console.log(hunderead.toLocaleString());//10,000,000,000 -->ways to see number in international and local standards //by default it is as per US standards
// Converts a number to a string by using the current or specified locale.
console.log(hunderead.toLocaleString()[3]);//0 -->see that it is converted to a string

console.log(hunderead.toLocaleString('en-in'));//10,00,00,00,000 -->Converted to Indian standards




