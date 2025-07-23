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




let mytimestamp= Date.now();
console.log(mytimestamp);//1753238160666 -->it gives time in millisecond and its reference is from 1st Jan 1970
console.log(Math.floor(Date.now()/1000))//1753238700 -->we get the time in seconds by /1000 and by math.floor we ignored the decimal value that was in millisecond

console.log(mycreatedDate.getTime());//1704429023000 -->convert date to time in millisecond eith reference to 1 Jan 1970 so that we can compare 2 dates easily


let newDate= new Date();
console.log( newDate.toLocaleString('default', {
    weekday:"long"
}));

//HERE WHEN WE USE newDate.toLocaleString WE CAN CUSTOMIZE IT FEATURES

//WHEN WE DO CTRL+SPACE  WE CAN SEE MANY OPTION FOR SUGGESTION FOR A FUNCTION
