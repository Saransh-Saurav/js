let name="Saransh"
const age=18;
// console.log("name is", name ,"age is", age );  //this is onle way to print both string and some message
// console.log("name is "+ name +" age is " + age); //this is another way with small change

// console.log(`name is ${name} age is ${age}`);  //this would be used more as we can perform some operation inside the {} also and remenber t is `` and not ''

// console.log(name[0]);




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

const newstring = n.substring(0,5);//USED FOR SLICING
console.log(newstring);//sara








