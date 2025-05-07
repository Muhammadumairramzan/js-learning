let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.setDate());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myTimeStamp.myDate());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getTime());
console.log(newDate.getMonth() );

newDate.toLocaleString('default',{
    weekday: "long"
})