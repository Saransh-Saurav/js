//CHECK OUT MDN OF FUNCTION TO GAIN MORE KNOWLEDGE

let name="Saransh"
const age=18;
// console.log("name is", name ,"age is", age );  //this is onle way to print both string and some message
// console.log("name is "+ name +" age is " + age); //this is another way with small change

// console.log(`name is ${name} age is ${age}`);  //this would be used more as we can perform some operation inside the {} also and remenber t is `` and not ''

// console.log(name[0]);//S




// ANOTHER WAY OF STRING DECLARATION

const n=new String("sara");

// This creates a String object, not a primitive string.
// n is an object of type String,means that type of n is object but it is string ie a primitive data type(pass by value)
// Internally behaves like: { "0": "s", "1": "a", "2": "r", "3": "a", length: 4, ... }
//typeof n // "object"

// console.log(n);//[String: 'sara']
//THERE ARE MANY OBJECT FUNCTION THAT WE CAN USE BY DECLARING IT AS AN OBJECT
//WHEN WE declare n IN INSPECT Of BroWser then it shows many functions

//console.log(n.__proto__);//{}

//You are asking:
// "Hey JavaScript, what built-in features (methods) does this object n get from the String system?"
//And the answer (the output) is:
// A big object that looks like this:
// {
//   charAt: function,
//   indexOf: function,
//   toUpperCase: function,
//   includes: function,
//   ...
// } but it shows only {}
//This is called the prototype, and it’s where JavaScript stores all the common string tools (functions) so every string object can use them.


//example
// console.log(n.length);//4

//lets use some proto function

//console.log(n.toUpperCase());//SARA

//notice we use n.length but did n.toUpperCase() bcz toUpperCase is a function that's why we use ()

//console.log(n); //[String: 'sara']

//it doesnt change bcz of toUpperCase ,means even though it is an obj it still have properties of string ie pass by value

// console.log(n.charAt(2)); //r //tells the charcter which is at index 2
// console.log(n.indexOf("s")); //0  //tells the first occourance of given char at the index









const p=new String("hello_world");

const newstring = p.substring(0,7);//USED FOR SLICING BUT DOESNT INCLUDE -VE SLICING
//REMEMBER IT (0,7)MEANS START FROM INDEX 0 AND GO UPTO INDEX 7-1=6 VALUES i.e INDEX 0,1,2,3,4,5,6
console.log(newstring);//hello_w

//ANOTHER WAY OF SLICING(IT INCLUDES NEGATIVE SLICING)
let anotherstring=p.slice(0,5);
console.log(anotherstring);//hello

anotherstring=p.slice(-7,-1);
console.log(anotherstring)//o_worl  -->it started with index -7("o") and goes till index -2("l")
anotherstring=p.slice(-10,6);
console.log(anotherstring);//ello_ -->it started with index -10("e")and goes till index 5("_")
//hello_world->here there are 2 ways of indexing 
//1st 0index on "h" then it increases to 10index on "d"
//2nd -1index on "d" then it decreases to -11index on "h"
//remember it only moves forward i.e from left to right only even if we type things like(-7,-11) it doesnt run



let new_name="    saransh saurav     ";
console.log(new_name);//    saransh saurav     -->prints with all unnecessary spaces
console.log(new_name.trim());//saransh saurav-->remove satrting and ending spaces


const url="https://saransh&32saurav.com"
console.log(url.replace("&32","-"));//https://saransh-saurav.com --->replace element item
//syntax replace("old element to be replaced","new element")

console.log(url.includes("saransh"));//true -->tells if url contains the given word or not
console.log(url.includes("poison"));//false



const variable="saransh-saurav-mishra";
console.log(variable.split("-"));//make string to an array on basi of seperator given by us(here seperator is "-")
//one more example
const words="he is a very good boy";
arrayWords=words.split(" ");
console.log(arrayWords);//[ 'he', 'is', 'a', 'very', 'good', 'boy' ] it is just as it was in python









