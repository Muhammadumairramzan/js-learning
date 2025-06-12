const user = {
    user_name : "umair",
    price : 999,
    welcome_message: function(){
        // console.log(`${this.user_name} , welcome to site`)
        // console.log(this)
    }
}
user.welcome_message()
user.user_name = "Saad"
user.welcome_message()
// console.log(this)

const add_two = (num1,num2) => {
    return num1+num2
}
console.log(add_two(2,5))

const add_three = (num1,num2,num3) => (num1+num2+num3)
console.log(add_three(2,3,4))