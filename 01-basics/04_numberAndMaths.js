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


//FUNCTION LIKE MIN MAX ETC
console.log(Number.MAX_VALUE);//1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_VALUE);//5e-324
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991


//THERE ARE MANY MORE FUNCTIONS,WE CAN TRY IT USING MDN OR SEE IT ON 'INSPECT' OF BROWSER








///////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(Math);//Object [Math] {} -->says it is an object and{}says about various function of it but the function is shown in INSPECT of browser so go check out

//some of math func are:-
console.log(Math.abs(-5));//5 -->it is modulus function of math ie|-5| gives 5 and |5|gives 5

console.log(Math.round(7.5));//8 -->round it off to 8

console.log(Math.ceil(7.1));//8 -->it rounds off by ceiling ie even if num if just larger it rounds off to next int
console.log(Math.floor(7.8));//7 -->it is opp of ceil it gives off the lower int




//MATH.RANDOM

console.log(Math.random());//GIVES OFF RANDOM VALUE BETWEEN [0,1) ie 0≤Math.random()<1

console.log(Math.random()*10);//just extended the range fron[0,1)->[0,10)
console.log((Math.random()*10)+1);//if we dont want  in range we can just +1 so that 0 never comes now range is [1,11)
console.log(Math.floor(Math.random()*10)+1);//it gives absolute integer value 

//if we have to get a random number in some range so we can use this method
const max=35;
const min=10;
console.log(Math.floor((Math.random() * (max-min+1)) + min));
//here math.random generate random number [0,1) the it multiplied by (max-min+1)->(35-10+1) so to give value in particular range ther +min to set the min obtained random value to min




