// function umair(){
//     console.log("my name is: ");
// }
// const x = umair(); 
// console.log(String(x));


// function add_two_number(number1,number2){
//     let result = number1+number2
//     console.log("Umair")
//     return result
    
// }
// const result = add_two_number(3,4)
// console.log("result: " , result)



function log_in_user(username){
    if(username === undefined){
        console.log("enter a user")
        return
    }
    return`${username} just Logged In` 
}
console.log(log_in_user())
