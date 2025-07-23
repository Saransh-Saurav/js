const a=[2,3,6,4,"hello",true];//we Can store different datatypes in an aaray in js
//it is resizable



const arr=[4,6,3];
arr.push(2,3,4,5,8);
console.log(arr);//[  4, 6, 3, 2,  3, 4, 5, 8]

arr.pop();
console.log(arr);//[  4, 6, 3, 2,  3, 4, 5]

arr.shift();
console.log(arr);//[ 6, 3, 2, 3, 4, 5 ]-->Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

arr.unshift(44);
console.log(arr);//[44, 6, 3, 2, 3, 4, 5 ]-->Inserts new elements at the start of an array, and returns the new length of the array.

console.log(arr.includes(88));//false-->// Determines whether an array includes a certain element, returning true or false as appropriate.()->The element to search for.

console.log(arr.indexOf(4));//5 -->Returns the index of the first occurrence of a value in an array, or -1 if it is not present.()->The value to locate in the array.

const newarray=arr.join();//Adds all the elements of an array into a string, separated by the specified separator string.
// separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
console.log(newarray);//44,6,3,2,3,4,5
console.log(typeof newarray);//string 
//join() makes an array into string 







//SLICE AND SPLICE

/*slice -->Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
  start
 The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
  end
 The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.*/


 /*Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

start — The zero-based location in the array from which to start removing elements.

deleteCount — The number of elements to remove.

returns — An array containing the elements that were deleted.*/



//let just see difference b/w SLICE AND SPLICE via code

console.log("A",arr);//A [  44, 6, 3, 2, 3, 4, 5]-->original array
//we use it as reference in original array if any change occour to the original array

const a1=arr.slice(1,3);
console.log(a1);//[ 6, 3 ]-->gives element from index[1,3) ie index 3 not included

console.log("B",arr);//B [  44, 6, 3, 2, 3, 4, 5] -->no change in original array by slice

const a2=arr.splice(1,3);
console.log(a2);//[ 6, 3, 2 ]-->gives element from index[1,3] ie index 3 included

console.log("C",arr);//C [ 44, 3, 4, 5 ]-->array changed ->the section of index [1,3](the section we spliced) is removed from the original array altogeather





const arr1=["green","blue","red"];
const arr2=["pink","yellow","orange"];
const arr3=[2,4,6,8];

// arr1.push(arr2); //Appends new elements to the end of an array, and returns the new length of the array.
// console.log(arr1); //[ 'green', 'blue', 'red', [ 'pink', 'yellow', 'orange' ] ]
//notice that array 2 element dont gets appended to array 1 ,rather arr2 altogeather get appended to arr1 ie now arr1[3]= [ 'pink', 'yellow', 'orange' ]


//METHOD 1 OF MERGINING 2 OR MORE ARRAYS ELEMENT WISE
const arr4=arr1.concat(arr2,arr3);//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(arr4);//['green','blue','red','pink','yellow','orange', 2,4,6,8]

//METHOD 2 OF MERGINING 2 OR MORE ARRAYS ELEMENT WISE
const arr5=[...arr1,...arr2,...arr3];//['green','blue','red','pink','yellow','orange', 2,4,6,8]
console.log(arr5);

const arr6=[...arr1,arr2,arr3]//
console.log(arr6);//['green','blue','red',[ 'pink', 'yellow', 'orange' ],[ 2, 4, 6, 8 ] ]
// ...->adds the elements of array while array name adds whole array in new one 



const array=[1,2,3,5,[3,4,6,[3,4,5,5]],3,5,7,[5,4,3,2,[4,4,3,2,[3,3,4,3]]]];
const usable_array=array.flat(Infinity);//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// depth — The maximum recursion depth ,for ex in 'array' we have max depth 3,
//  like max three additional array one inside other
//we can set the depth to infinity so that we dont have to count the depth
console.log(usable_array);//[1, 2, 3, 5, 3, 4, 6, 3,4, 5, 5, 3, 5, 7, 5, 4,3, 2, 4, 4, 3, 2, 3, 3,4, 3]



console.log(Array.isArray("saransh"));//false
console.log(Array.from("saransh"));//['s', 'a', 'r', 'a', 'n', 's','h']
//Creates an array from an iterable object.

// Array.from() converts any element to an array

console.log(Array.from({myname:"Saransh",age:19}));//[]
//gives an empty array bcz we didn't specify as if 'key' or 'value' should be made an array

let score1=100;
let score2=200;
let score3=300;
let scores=[123,234,678];

console.log(Array.of(score1,score2,score3,...scores));//[ 100, 200, 300, 123, 234, 678 ]
//Returns a new array from a set of elements.