//DATES 

let m=new Date();
console.log(m);//2025-07-22T17:26:16.905Z -->it prints the date but its not in such readable  format
console.log(m.toString());//Tue Jul 22 2025 17:27:47 GMT+0000 (Coordinated Universal Time)
console.log(m.toISOString());//2025-07-22T17:28:20.667Z
console.log(m.toJSON());//2025-07-22T17:28:54.420Z
console.log(m.toDateString());//Tue Jul 22 2025-->gives date only no time
console.log(m.toLocaleString());//7/22/2025, 5:30:33 PM

//hence there are more ways to denote the date ,these wer some ways

console.log(typeof m);//object



const mycreatedDate=new Date(2024,0,5,4,30,23);
console.log(mycreatedDate.toString());//Fri Jan 05 2024 04:30:23 GMT+0000 (Coordinated Universal Time)
// hence we give Date(year,month(atart with 0 ie Jan=0),Date,hour,min,second)

//another way
let mycreatedDate2=new Date("2023,01,03");//yyyy/mm/dd
console.log(mycreatedDate2.toString());//Tue Jan 03 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
mycreatedDate2=new Date("01,07,2024");//mm/dd/yyyy
console.log(mycreatedDate2.toString());//Sun Jan 07 2024 00:00:00 GMT+0000 (Coordinated Universal Time)