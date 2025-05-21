const js_user = {
    name: "Umair",
    "fullName" :"Umair Ramzan",
    age:26,
    email:"umairramzan295@gmail.com",
    isLogIn:false,
    LastLogInDays:["Monday","Friday"]
}
js_user.email = "admin@gmail.com"

const mySum = Symbol("key1")
// console.log(js_user.email)
// console.log(js_user.isLogIn)
// console.log(js_user.fullName)


js_user.greetings = function(){
    console.log("hello");
}
js_user.greeting = function(){
    console.log(`hell js user ${this.email}`);
}
console.log(js_user.greeting());