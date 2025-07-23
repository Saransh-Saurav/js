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




