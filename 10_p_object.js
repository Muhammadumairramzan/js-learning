// const tinderUser = new Object()

const tinder_user = {};
tinder_id = "123abc";
tinder_name = "umair";
tinder_user.isLogedIn = false
// console.log(tinder_id)
const regular_user = {
    email: "umair@gmail.com",
    full_name : {
        firstName: "Umair",
        lastName: "Ramzan"
                }
}
// console.log(regular_user.full_name)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(Object.keys(regular_user));
console.log(regular_user.hasOwnProperty("full_name")
)